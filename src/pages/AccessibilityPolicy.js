import React, { useEffect, useState } from "react";
import "../css/privacyPolicy.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import GeneralHero from "../components/GeneralHero";
function AccessibilityPolicy() {

  const [banner, setBanner] = useState(null);

  const [desc1, setDesc1] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/accessibility-policy-page?populate=deep"
    );
    const json = await data.json();
    const { description, banner } = json.data.attributes;
    setDesc1(description);
    setBanner(banner)
  }
  // check data
  if (!desc1) return null;
  if (!banner) return null;
  return (
    <main className="accessibility">
       <GeneralHero 
        title={banner.title}
        bg_img={banner.bg_image.data.attributes.url}
      />
      {/* style for accessibility-description is in /css/privacyPolicy.css */}
      <div className="container">
        <div className="accessibility-description">
        <ReactMarkdown>{desc1}</ReactMarkdown>
        </div>
      </div>

    </main>
  )
}

export default AccessibilityPolicy
