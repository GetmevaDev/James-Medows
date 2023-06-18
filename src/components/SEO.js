import React from "react";
import { Helmet } from "react-helmet";

function SEO({ title, description }) {
 
  return (
    <Helmet>
      <title> {title ? title: "Traffic Ticket Lawyer New York"} </title>
      {title &&  <meta property="og:title" content={title} />}

      {description && <meta name="description"  content={description }   />}
      {description && <meta name="og:description"  content={description }   />}
      
      
    {/* <!-- Facebook Meta Tags -->
        <meta property="og:url" content="https://trafficticketlawyernewyork.com/">
        <meta property="og:type" content="website">
        <meta property="og:title" content="James Medows">
        <meta property="og:description" content="Hello ">
        <meta property="og:image" content="https://blog.ipleaders.in/wp-content/uploads/2020/07/traffic-lawyer.jpg">

  <!-- Twitter Meta Tags -->
          <meta name="twitter:card" content="summary_large_image">
          <meta property="twitter:domain" content="trafficticketlawyernewyork.com">
          <meta property="twitter:url" content="https://trafficticketlawyernewyork.com/">
          <meta name="twitter:title" content="James Medows">
          <meta name="twitter:description" content="Hello ">
          <meta name="twitter:image" content="https://blog.ipleaders.in/wp-content/uploads/2020/07/traffic-lawyer.jpg">

  <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}


    </Helmet>
  );
}

export default SEO;
