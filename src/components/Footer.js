import React from "react";
import "../css/footer.css";
import { Link, NavLink } from "react-router-dom";
import avvo2015 from "../images/avvo2015.png";
import avvo2023 from "../images/avvo2023.png";
import location_icon from "../images/location.webp";
import { useSelector } from "react-redux";
function Footer() {
  const logo = useSelector((store) => store.pagesData.logo);
  if (logo.length === 0) return null;

  return (
    <footer className="footer ">
      <div className="container">
        <div className="footer__body">
          <div className="footer__logo">
            <Link to="/">
              <img loading="lazy" src={logo[1]} alt={logo[0]} />
            </Link>
          </div>

          <ul className="footer__list">
            <li className="list__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink to="/about-us" className="nav__link">
                About Us
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink to="/speeding-tickets" className="nav__link">
                Practice Areas
              </NavLink>
            </li>
            {/* <li className="list__item">
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
              </li> */}
          </ul>
          <div className="footer__location">
            <div className="location__wrapper">
              <div className="location__item">
                <img src={location_icon} alt="location icon" />
                <div className="location__text">
                  <h4>Cedarhurst, NY office</h4>
                  <p>28 Lotus Street, Cedarhurst, NY 11516</p>
                </div>
              </div>
              <div className="location__item">
                <img src={location_icon} alt="location icon" />
                <div className="location__text">
                  <h4>Brooklyn, NY office</h4>
                  <p>306 Atlantic Avenue, Brooklyn, NY 11201</p>
                </div>
              </div>
            </div>

            <div className="footer__logos">
              <img loading="lazy" src={avvo2023} alt="logo" />
              <img loading="lazy" src={avvo2015} alt="logo" />
            </div>
          </div>

          <div className="foooter__rights">
            <p className="rights">© 2023 James Medows All rights reserved</p>
          </div>
        </div>
      </div>
      <div className="important-notice">
        <div className="container">
          <h3>IMPORTANT NOTICE</h3>
          <p>
            Attorney Advertising - Prior results do not guarantee a similar
            outcome. The content of this site is informational in nature and is
            not intended as legal advice. A licensed attorney should be
            contacted if legal advice is sought. This website is attorney
            advertising and is administered by JAMES MEDOWS, ESQ., P.C
          </p>
        </div>
      </div>
      <div className="container">               
       
      <div className="footer__bottom">
            
        <Link to="/privacy-policy" className="bottom__link">Privacy Policy</Link>
        <Link to="/terms-conditions" className="bottom__link">Terms and Conditions</Link>
        <Link to="/accessibility-policy" className="bottom__link">Accessibility Policy and Commitment Statement</Link>
        <p>  This website is attorney advertising and is administered by 
          <a className="gm"  href="https://robertgerov.com/">Robert Gerov Media</a>
        </p>
      </div>
      </div> 
    </footer>
  );
}

export default Footer;
