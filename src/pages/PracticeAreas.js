import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GeneralHero from "../components/GeneralHero";
import "../css/practiceAreas.css";
import { useDispatch } from "react-redux";
import { getSubLink } from "../utils/pages";
function PracticeAreas() {
  const dispatch = useDispatch()
  const [banner, setBanner] = useState(null);
  const [area, setArea] = useState([]);
  useEffect(() => {
    getPracticeAreasPageData();
  }, []);

  async function getPracticeAreasPageData() {
    const data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/practice-areas-page?populate=deep"
    );
    const json = await data.json();
    const { Area, banner } = json.data.attributes;
    setBanner(banner);
    setArea(Area);
  }
  // check data or early return
  if (!banner) return null;
  if (area.length === 0) return null;

  function getSublink(e){
    console.log(e.target.textContent);
    dispatch(getSubLink(e.target.textContent))
  }
  return (
    <main className="practiceAreas">
      <GeneralHero
        title={banner.title}
        bg_img={banner.bg_image.data.attributes.url}
      />
      <div className="container">
              
          
      <section className="practiceAreas__grid">
        {area.map((item) => {
          return (
            <NavLink
              to={item.url && item.url}
              key={item.id}
              className={item.url? "practiceAreas__link": "practiceAreas__link disable"}
              onClick={(e)=> getSublink(e)}
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
