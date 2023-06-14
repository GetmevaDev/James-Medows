import React, {useEffect, useState} from 'react'
import GeneralHero from '../components/GeneralHero';
import ImageBanner from '../components/ImageBanner';
import Text from '../components/Text';

function CDLHoldersGuide() {
  const [banner, setBanner] = useState(null);
  const [imgBanner, setImgBanner] = useState(null);
  const [blockWhite, setBlockWhite] = useState(null);
  useEffect(()=> {
    getPageData()
  }, [])
  async function getPageData() {
    const data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/cdl-holders-guide-page?populate=deep"
    );
    const json = await data.json();
    const { banner, ImageBanner,  BlockWhite } = json.data.attributes;
      console.log(ImageBanner);
    setBanner(banner);
    setImgBanner(ImageBanner);
    setBlockWhite(BlockWhite);
  }

   // check data
   if (!banner) return null;
   if (!imgBanner) return null;
   if (!blockWhite) return null;
  return (
    <main className='CDLHoldersGuide'>
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
