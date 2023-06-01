import React, { useEffect, useState } from "react";
import GeneralHero from "../components/GeneralHero";
import ImageBanner from "../components/ImageBanner";
import TextBanner from "../components/TextBanner";
import BlockImageText from "../components/BlockImageText";

const SpeedingTickets = () => {
  useEffect(() => {
    getSpeedyTicketsPageData();
  }, []);

  const [banner, setBanner] = useState(null);
  const [imgBanner, setImgBanner] = useState(null);
  const [blockGray, setBlockGray] = useState(null);
  const [blockWhite, setBlockWhite] = useState(null);

  async function getSpeedyTicketsPageData() {
    const data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/speeding-tickets-page?populate=deep"
    );
    const json = await data.json();
    const { Banner, ImageBanner, BlockGray, BlockWhite } = json.data.attributes;

    setBanner(Banner);
    setImgBanner(ImageBanner);
    setBlockGray(BlockGray);
    setBlockWhite(BlockWhite);
  }

  // check data
  if (!banner) return null;
  if (!imgBanner) return null;
  if (!blockGray) return null;
  if (!blockWhite) return null;

  return (
    <main className="speedingTickets">
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
      <BlockImageText
        title={blockWhite.title}
        description={blockWhite.description}
        img={blockWhite.image.data.attributes.url}
        altText={blockWhite.image.data.attributes.alternativeText}
      />
    </main>
  );
};

export default SpeedingTickets;
