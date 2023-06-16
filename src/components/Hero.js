import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "../css/hero.css";

function Hero({ title, subtitle, btn, btn_link, bg_img, call_us }) {
  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    phoneNumber: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    emailjs
      .send(
        "service_ok9prgn",
        "template_ht0bvkp",
        values,
        "user_iw2a3XOS7O7HrGbR8S31M"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            phoneNumber: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className="hero" style={{ backgroundImage: `url(${bg_img})` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="hero__body">
          <div className="hero__content">
            <ReactMarkdown>{title}</ReactMarkdown>

            {subtitle && <h5>{subtitle}</h5>}

            {btn && (
              <a className="hero__btn" href={btn_link}>
                {btn}
              </a>
            )}
          </div>

          {call_us && (
            <form className="hero__contact" onSubmit={handleSubmit}>
              <ReactMarkdown>{call_us}</ReactMarkdown>
              <label htmlFor="phone">Enter your phone number</label>

              <input
                type="text"
                id="phone"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
              />

              <button
                className={`button-loader ${isLoading ? "loading" : ""}`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loader" />
                  </>
                ) : (
                  "Submit Phone Number"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
