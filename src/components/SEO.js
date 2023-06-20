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
  twitterImage
}) {
  return (
    <Helmet>
      <title> {title ? title : "Traffic Ticket Lawyer New York"} </title>
      {title && <meta property="og:title" content={title} />}

      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {type && <meta property="og:type" content={type} />}

     

      

      {/* Twitter Meta Tags */}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {twitterDomain && <meta property="twitter:domain" content={twitterDomain} />}
      {twitterUrl &&  <meta property="twitter:url" content={twitterUrl} />}
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription &&  <meta name="twitter:description" content={twitterDescription} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}

    </Helmet>
  );
}

export default SEO;
