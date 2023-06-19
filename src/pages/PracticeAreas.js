import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GeneralHero from "../components/GeneralHero";
import SEO from "../components/SEO";

import "../css/practiceAreas.css";
import { useDispatch } from "react-redux";
import { getSubLink } from "../utils/pages";

function PracticeAreas() {
  const dispatch = useDispatch();
  const [banner, setBanner] = useState(null);
  const [area, setArea] = useState([]);
  const [seo, setSeo] = useState(null)
  useEffect(() => {
    getPracticeAreasPageData();
  }, []);

  async function getPracticeAreasPageData() {
    const data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/practice-areas-page?populate=deep"
    );
    const json = await data.json();
    const { Area, banner, seo } = json.data.attributes;
    setBanner(banner);
    setArea(Area);
    setSeo(seo)
  }
  // check data or early return
  if (!banner) return null;
  if (!seo) return null;
  if (area.length === 0) return null;

  function getSublink(e) {
    dispatch(getSubLink(e.target.textContent));
  }
  return (
    <main className="practiceAreas">
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image}
        type={seo.type}
        facebookUrl = {seo.facebookUrl}
        facebookTitle={seo.facebookTitle}
        facebookDescription={seo.facebookDescription}
        facebookImage={seo.facebookImage}
        twitterCard={seo.twitterCard}
        twitterDomain={seo.twitterDomain}
        twitterUrl={seo.twitterUrl}
        twitterTitle={seo.twitterTitle}
        twitterDescription={seo.twitterDescription}
        twitterImage={seo.twitterImage}
      />
      <GeneralHero
        title={banner.title}
        sub="Practice areas"
        bg_img={banner.bg_image.data.attributes.url}
      />
      <div className="container">
        <section className="practiceAreas__grid">
          {area.map((item) => {
            return (
              <NavLink
                to={item.url && "/practice-areas" + item.url}
                key={item.id}
                className={
                  item.url
                    ? "practiceAreas__link"
                    : "practiceAreas__link disable"
                }
                onClick={(e) => getSublink(e)}
              >
                {item.text}
              </NavLink>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default PracticeAreas;
