import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "../css/hero.css";

function Hero({ title, subtitle, btn, btn_link, bg_img, call_us }) {
  const [isLoading, setIsLoading] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");

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
        { phoneNumber },
        "user_iw2a3XOS7O7HrGbR8S31M"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setPhoneNumber("");
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

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };

  const formatPhoneNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const match = cleanedValue.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      let formattedValue = "";
      if (match[1]) {
        formattedValue += "(" + match[1];
      }
      if (match[2]) {
        formattedValue += ") " + match[2];
      }
      if (match[3]) {
        formattedValue += "-" + match[3];
      }
      return formattedValue;
    }
    return cleanedValue;
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
                type="tel"
                id="phone"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
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
