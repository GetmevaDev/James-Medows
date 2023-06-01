import React, { useState } from "react";
import "../css/faq.css";
import accordion_icon from "../images/accordion_icon.svg";
function Faq({ title, itemArr }) {
  const [selected, setSelected] = useState(null);
  function toggle(i) {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }
  return (
    <section className="faq">
      <div className="container">
        <h2>{title}</h2>
        <div className="faq__accordion">
          {itemArr.map((item, i) => {
            return (
              <div key={item.id} className="accordion__item">
                <div className="question" onClick={() => toggle(i)}>
                  <h4>{item.text} </h4>
                  <img loading="lazy"
                    className={
                      selected === i
                        ? "accordion_icon"
                        : "accordion_icon rotate_180"
                    }
                    src={accordion_icon}
                    alt="icon"
                  />
                </div>
                <div className={selected === i ? "answer show" : "answer"}>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
