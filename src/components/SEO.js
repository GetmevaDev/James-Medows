import React from "react";
import { Helmet } from "react-helmet";

function SEO({
  title,
  description,
  image,
  type,
  twitterCard,
  twitterDomain,
  twitterUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) {
  return (
    <Helmet>
      <title> {title && "Traffic Ticket Lawyer New York"} </title>
      {title && <meta property="og:title" content={title} />}

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />

      <meta property="twitter:domain" content={twitterDomain} />

      <meta property="twitter:url" content={twitterUrl} />
      <meta name="twitter:title" content={twitterTitle} />

      <meta name="twitter:description" content={twitterDescription} />

      <meta name="twitter:image" content={twitterImage} />
    </Helmet>
  );
}

export default SEO;
