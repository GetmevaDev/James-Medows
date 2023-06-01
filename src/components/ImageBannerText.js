import React from "react";
import "../css/imageBannerText.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
function ImageBannerText({ title, description, img, altText, bg_gray, reverse }) {
  return (
    <section className={bg_gray ? "imageBannerText bg-gray": "imageBannerText"}>
      <div className="container">
        <div className={reverse ? "imageBannerText__wrapper reverse":"imageBannerText__wrapper"}>
          <div className="imageBannerText__img">
            <img loading="lazy" src={img} alt={altText}  />
          </div>
          <div className="imageBannerText__content">
            {title && <h2>{title}</h2>}
            {description && <ReactMarkdown>{description}</ReactMarkdown>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageBannerText;
