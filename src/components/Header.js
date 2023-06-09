import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/header.css";
import { useDispatch } from "react-redux";
import { getCurrentPage, getSubLink, logoData } from "../utils/pages";
function Header() {
  const dispatch = useDispatch()
  const [logoInfo, setLogoInfo] = useState([]);
  useEffect(() => {
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
      dispatch(logoData([alternativeText, url])) 

      
    }
    getLogo();
  }, [dispatch]);

  
  if(logoInfo.length ===0) return null
  function getLinkText(e){
    dispatch(getCurrentPage(e.target.textContent))
    dispatch(getSubLink(''))
  }
  
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
                <NavLink to="/about" className="nav__link" onClick={(e)=> getLinkText(e)}>
                  About Us
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/practice-areas" className="nav__link" onClick={(e)=> getLinkText(e)}>
                  Practice Areas
                </NavLink>
              </li>
              {/* <li className="list__item">
                <NavLink to="/courts-we-cover" className="nav__link" onClick={(e)=> getLinkText(e)}>
                  Courts We Cover
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/reviews" className="nav__link" onClick={(e)=> getLinkText(e)}>
                  Reviews
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/contact" className="nav__link" onClick={(e)=> getLinkText(e)}>
                  Contact Us
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
