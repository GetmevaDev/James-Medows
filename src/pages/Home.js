import React, {  useEffect, useState } from "react";
import Hero from "../components/Hero";
import ChooseUs from "../components/ChooseUs";
import OurProfiles from "../components/OurProfile";
import Faq from "../components/Faq";
import Slider from "../components/Slider";
import ImageBannerText from "../components/ImageBannerText";
import ContactUs from "../components/ContactUs";
import slider_bg from "../images/slider_bg.jpg";
import { useSelector } from "react-redux";
import SEO from "../components/SEO";


function Home() {
  const json = useSelector((store) => store.pagesData.homePage);
  const [banner, setBanner] = useState(null);
  const [chooseUs, setChooseUs] = useState(null);
  const [ourProfiles, setOurProfiles] = useState(null);
  const [slider, setSlider] = useState(null);
  const [faq, setFaq] = useState(null);
  const [imageBannerText, setImageBannerText] = useState(null);
  const [contactUs, setContactUs] = useState(null);
  const [seo, setSeo] = useState(null);

  

  useEffect(() => {
    function getData() {    

      const {
        Banner,
        Chooseus,
        OutProfiles,
        Slider,
        FAQ,
        ImageBannerText,
        ContactUs,
        seo
      } = json.data.attributes;
  
      setBanner(Banner);
      setChooseUs(Chooseus);
      setOurProfiles(OutProfiles);
      setSlider(Slider);
      setFaq(FAQ);
      setImageBannerText(ImageBannerText);
      setContactUs(ContactUs);
      setSeo(seo)
    }
   
    getData();
  }, [json]);
 
  // check data
  if (!banner) return null;
  if (!chooseUs) return null;
  if (!ourProfiles) return null;
  if (!slider) return null;
  if (!faq) return null;
  if (!imageBannerText) return null;
  if (!contactUs) return null;
  if (!seo) return null;
  
  return (
    
    <main className="home">
      <SEO title={seo.title} description={seo.description}/>
      <Hero
        title={banner.title}
        subtitle={banner.sub_title}
        btn={banner.button}
        btn_link={banner.button_link}
        call_us={banner.call_us}
        bg_img={banner.bg_image.data.attributes.url}
      />

      <ChooseUs
        title={chooseUs.title}
        descprition={chooseUs.description}
        cardArr={chooseUs.ChooseusItem}
      />

      <OurProfiles
        title={ourProfiles.title}
        bg_img={ourProfiles.bg_image.data.attributes.url}
        companyArr={ourProfiles.OutProfileItem}
        description={ourProfiles.description}
        cardArr={ourProfiles.Items}
      />
      <Slider
        title={slider.title}
        sliderItems={slider.SlideItem}
        bg_img={slider_bg}
      />

      <Faq title={faq.title} itemArr={faq.FAQItem} />
      <ImageBannerText
        title={imageBannerText.title}
        description={imageBannerText.description}
        img={imageBannerText.image.data.attributes.url}
        altText={imageBannerText.image.data.attributes.alternativeText}
        bg_gray={true}
        reverse={false}
      />
      <ContactUs
        title={contactUs.title}
        phone={contactUs.phone}
        address={contactUs.address}
        email={contactUs.email}
        map={contactUs.map}
      />
    </main>
    
  );
}

export default Home;
