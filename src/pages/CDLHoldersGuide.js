import React, {useEffect, useState} from 'react'
import GeneralHero from '../components/GeneralHero';
import ImageBanner from '../components/ImageBanner';
import Text from '../components/Text';
import SEO from "../components/SEO";

function CDLHoldersGuide() {
  const [banner, setBanner] = useState(null);
  const [imgBanner, setImgBanner] = useState(null);
  const [blockWhite, setBlockWhite] = useState(null);
  const [seo, setSeo] = useState(null);

  useEffect(()=> {
    getPageData()
  }, [])
  async function getPageData() {
    const data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/cdl-holders-guide-page?populate=deep"
    );
    const json = await data.json();
    const { banner, ImageBanner,  BlockWhite, seo } = json.data.attributes;
    setBanner(banner);
    setImgBanner(ImageBanner);
    setBlockWhite(BlockWhite);
    setSeo(seo)
  }

   // check data
   if (!banner) return null;
   if (!imgBanner) return null;
   if (!blockWhite) return null;
    

  return (
    <main className='CDLHoldersGuide'>
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
      
      <ImageBanner
        title={blockWhite.title}
        description={blockWhite.description}
        img={blockWhite.image.data.attributes.url}
        altText={blockWhite.image.data.attributes.alternativeText}
      />
      <Text text={imgBanner.title}/>
    </main>
  )
}

export default CDLHoldersGuide
