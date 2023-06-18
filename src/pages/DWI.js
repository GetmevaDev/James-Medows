import React, {useEffect, useState} from 'react'
import GeneralHero from '../components/GeneralHero';
import ImageBanner from '../components/ImageBanner';
import TextBanner from '../components/TextBanner';


function DWI() {
  const [banner, setBanner] = useState(null);
  const [imgBanner, setImgBanner] = useState(null);
  const [blockGray, setBlockGray] = useState(null);
  useEffect(()=> {
    getPageData()
  }, [])
  async function getPageData() {
    const data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/dw-iin-ny-page?populate=deep"
    );
    const json = await data.json();
    const { banner, ImageBanner, BlockGray } = json.data.attributes;

    setBanner(banner);
    setImgBanner(ImageBanner);
    setBlockGray(BlockGray);
  }

   // check data
   if (!banner) return null;
   if (!imgBanner) return null;
   if (!blockGray) return null;
  return (
    <main className='DWI'>
      <GeneralHero
        title={banner.title}
        bg_img={banner.bg_image.data.attributes.url}
      />
      
      <ImageBanner
        title={imgBanner.title}
        description={imgBanner.description}
        img={imgBanner.image.data.attributes.url}
        altText={imgBanner.image.data.attributes.alternativeText}
      />
       <TextBanner title={blockGray.title} description={blockGray.description} />
   
    </main>
  )
}

export default DWI
