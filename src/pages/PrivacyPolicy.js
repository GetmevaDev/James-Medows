import React, { useEffect, useState } from "react";
import "../css/privacyPolicy.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import GeneralHero from "../components/GeneralHero";

function PrivacyPolicy() {
  const [banner, setBanner] = useState(null);

  const [desc1, setDesc1] = useState(null);
  const [desc2, setDesc2] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/privacy-policy-page?populate=deep"
    );
    const json = await data.json();
    console.log(json);
    const { description, description_2, banner } = json.data.attributes;
    setDesc1(description);
    setDesc2(description_2);
    setBanner(banner)
  }
  // check data
  if (!desc1) return null;
  if (!desc2) return null;
  if (!banner) return null;
  return (
    <main>
      <GeneralHero 
        title={banner.title}
        bg_img={banner.bg_image.data.attributes.url}
      />

    <div className="privacyPolicy">
      <div className="privacyPolicy__description1">
        <div className="container">
          <ReactMarkdown>{desc1 && desc1}</ReactMarkdown>
        </div>
      </div>
      <div className="privacyPolicy__description2">
        <div className="container">
        <ReactMarkdown>{desc2 && desc2}</ReactMarkdown>

        </div>
      </div>
    </div>
    </main>
  );
}

export default PrivacyPolicy;
