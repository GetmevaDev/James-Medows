import React from "react";
import { Helmet } from "react-helmet";

function SEO({ title, description }) {
 
  return (
    <Helmet>
      <title> {title ? title: "Traffic Ticket Lawyer New York"} </title>
      {title &&  <meta property="og:title" content={title} />}

      {description && <meta name="description"  content={description }   />}
      {description && <meta name="og:description"  content={description }   />}


    </Helmet>
  );
}

export default SEO;
