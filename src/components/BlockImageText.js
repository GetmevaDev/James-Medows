import React from "react";
import "../css/blockImageText.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
function BlockImageText({ img, altText, description, title }) {
  return (
    <section className="blockImageText">
      <div className="container">
        <div className="blockImageText__img">
          <img src={img} alt={altText} />
        </div>
        <h2>{title}</h2>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </section>
  );
}

export default BlockImageText;
