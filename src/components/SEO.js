import React from "react";
import { Helmet } from "react-helmet-async";

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
    <>
      {title && (
        <Helmet>
          <title>{title}</title> <link rel="icon" href="/svg/logo.svg" />
          <link rel="canonical" href={twitterUrl} />
        </Helmet>
      )}
      {description && (
        <Helmet>
          <meta name="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta property="og:image" content={image} />

          <meta name="twitter:card" content={twitterCard} />
          <meta property="twitter:domain" content={twitterDomain} />
          <meta property="twitter:url" content={twitterUrl} />
          <meta name="twitter:title" content={twitterTitle} />
          <meta name="twitter:description" content={twitterDescription} />
          <meta name="twitter:image" content={twitterImage} />
        </Helmet>
      )}
    </>
  );
}

export default SEO;
