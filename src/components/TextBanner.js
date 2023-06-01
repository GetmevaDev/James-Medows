import React from "react";
import "../css/textBanner.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
function TextBanner({ title, description }) {
  return (
    <section className="textBnner">
      <div className="container">
        <h2>{title}</h2>
        <div className="textBanner__desc">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}

export default TextBanner;
