import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/header.css";
function Header() {
  const [logoInfo, setLogoInfo] = useState([]);
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
  if(logoInfo.length ===0) return null
  
  return (
    <div className="header">
      <div className="container">
        <div className="header__grid">
          <div className="header__logo">
            <Link to="/">
              <img loading="lazy" src={logoInfo[1]} alt={logoInfo[0]} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="nav__list">
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
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
