import React, { useEffect, useState } from "react";
import GeneralHero from "../components/GeneralHero";
import SEO from "../components/SEO";

import "../css/courtsWeCover.css"

function CourtsWeCover() {

  const [banner, setBanner] = useState(null);
  const [seo, setSeo] = useState(null);
  const [description, setDescription] = useState(null);
  const [description_bottom, setDescription_bottom] = useState(null);
  const [courtItems, setCourtItems] = useState([])

  useEffect(() => {
    getAboutPageData();
  }, []);

  async function getAboutPageData() {
    const data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/courts-we-cover-page?populate=deep"
    );
    const json = await data.json();
    console.log(json);
    const { banner,  seo, description, description_bottom, ItemCourt
    } = json.data.attributes;
    setBanner(banner);  
    setSeo(seo)
    setDescription(description)
    setDescription_bottom(description_bottom)
    setCourtItems(ItemCourt)

  }
  // check data
  if (!banner) return null;
  
  
  return (
    <main className="courtsWeCover">
       <SEO
        title={seo?.title}
        description={seo?.description}
        image={seo?.image}
        type={seo?.type}
        
        twitterCard={seo?.twitterCard}
        twitterDomain={seo?.twitterDomain}
        twitterUrl={seo?.twitterUrl}
        twitterTitle={seo?.twitterTitle}
        twitterDescription={seo?.twitterDescription}
        twitterImage={seo?.twitterImage}
      />

      <GeneralHero
        title={banner.title}
        bg_img={banner.bg_image.data.attributes.url}
      /> 
      <div className="container">
        <p className="courtsWeCover__desc1">{description}</p>
      
      <div className="courtsWeCover__item-wrapper">
        {courtItems.map(item=> {
          return(
            <div className="courtsWeCover__item" key={item.id}>
              
            </div>
          )
        })}
      </div>
      
        <p className="courtsWeCover__desc2">{description_bottom}</p>
      </div>  

    </main>
  ) 
}

export default CourtsWeCover;
