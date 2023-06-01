import React, { useEffect, useState } from "react";
import "../css/footer.css";
import { Link, NavLink } from "react-router-dom";
import avvo2015 from "../images/avvo2015.png";
import avvo2023 from "../images/avvo2023.png";
import RGM from "../images/RGM.svg";
function Footer() {
  const [logoInfo, setLogoInfo] = useState([]);
  const[wait, setWait] = useState(true)
  setTimeout(()=>{
    setWait(false)
  },1000)
  console.log("wait", wait);
  useEffect(() => {
    getLogo();
  }, []);

  async function getLogo() {
    let data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/logos?populate=deep"
    );
    let logo = await data.json();

    const {
      alternativeText,
      url,
    } = logo.data[0].attributes.Logo.data.attributes;
    setLogoInfo([alternativeText, url]);
  }

  if (logoInfo.length === 0) return null;

  return (
    wait && (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__logo">
            <Link to="/">
              <img loading="lazy" src={logoInfo[1]} alt={logoInfo[0]} />
            </Link>
          </div>

          <div className="footer__nav">
            <ul className="footer__list">
              <li className="list__item">
                <NavLink to="/" className="nav__link">
                  Home
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/about" className="nav__link">
                  About Us
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/speeding-tickets" className="nav__link">
                  Practice Areas
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/courts-we-cover" className="nav__link">
                  Courts We Cover
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/reviews" className="nav__link">
                  Reviews
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/contact" className="nav__link">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="footer__logos">
              <img loading="lazy" src={avvo2023} alt="logo" />
              <img loading="lazy" src={avvo2015} alt="logo" />
            </div>
          </div>

          <div className="foooter__rights">
            <p className="rights">© 2023 James Medows All rights reserved</p>
            <div className="footer__company">
              <img loading="lazy" src={RGM} alt="rgm" />
              <p>Web Design & Digital Marketing <br/>   by <a href="https://robertgerov.com/">Robert Gerov Media</a> </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
  );
}

export default Footer;
