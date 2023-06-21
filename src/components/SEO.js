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
      <title>New York Traffic Ticket Lawyer in Brooklyn: James Medows</title>
      <meta
        name="description"
        content="Best traffic ticket lawyer in New York: James Medows. An experienced traffic ticket attorney in Brooklyn, NY: Schedule a consultation online now!"
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content="https://trafficticketlawyernewyork.com"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="New York Traffic Ticket Lawyer in Brooklyn: James Medows"
      />
      <meta
        property="og:description"
        content="Best traffic ticket lawyer in New York: James Medows. An experienced traffic ticket attorney in Brooklyn, NY: Schedule a consultation online now!"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/rgm/image/upload/v1685378377/home_hero_bg_79c439c9f0.png"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="trafficticketlawyernewyork.com"
      />
      <meta
        property="twitter:url"
        content="https://trafficticketlawyernewyork.com"
      />
      <meta
        name="twitter:title"
        content="New York Traffic Ticket Lawyer in Brooklyn: James Medows"
      />
      <meta
        name="twitter:description"
        content="Best traffic ticket lawyer in New York: James Medows. An experienced traffic ticket attorney in Brooklyn, NY: Schedule a consultation online now!"
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/rgm/image/upload/v1685378377/home_hero_bg_79c439c9f0.png"
      />
    </Helmet>
  );
}

export default SEO;
