import React from "react";
import "../css/contactUs.css";
import phone_icon from "../images/telephone.svg";
import email_icon from "../images/email.svg";
import gps_icon from "../images/gps.svg";

function ContactUs({ title, phone, address, email, map }) {
  return (
    <section className="contactUs">
      <div className="container">
        <div className="contactUs__wrapper">
          <div className="contactUs__content">
            <h2>{title}</h2>
            <ul>
              <li>
                <img src={phone_icon} alt="phone" />
                <p>
                  Call Us:
                  <a className="phone-bold" href={`tel:${phone}`}>
                    {phone}
                  </a>
                </p>
              </li>
              <li>
                <img loading="lazy" src={gps_icon} alt="phone" />
                <p>
                  Address: <span>{address}</span>
                </p>
              </li>
              <li>
                <img loading="lazy" src={email_icon} alt="phone" />
                <p>
                  Email: <span>{email}</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="contactUs__map">
            <iframe
              src={map}
              title="James Medows"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
