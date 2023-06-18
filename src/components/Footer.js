import React from "react";
import "../css/footer.css";
import { Link, NavLink } from "react-router-dom";
import avvo2015 from "../images/avvo2015.png";
import avvo2023 from "../images/avvo2023.png";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage } from "../utils/pages";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
function Footer() {
  const dispatch = useDispatch()
  const footer = useSelector((store) => store.pagesData.footer);

  // if(!footer) return console.log("hey");
  // console.log(footer);
  if(footer?.Logo?.data?.attributes?.url === undefined) return null

  function getLinkText(e){
    dispatch(getCurrentPage(e.target.textContent))
    
  }
  return (
    <footer className="footer ">
      <div className="container">
        <div className="footer__body">
          <div className="footer__logo">
            <Link to="/">
              <img loading="lazy" src={footer.Logo.data.attributes.url} alt={footer.Logo.data.attributes.alternativeText} />
            </Link>
          </div>

          <ul className="footer__list">
              {footer.FooterItem.map(item=>{
                return(
                <li className="list__item" key={item.id}>
                    <NavLink to={item.link} className="nav__link" onClick={(e)=> getLinkText(e)}>
                      {item.name}
                    </NavLink>
                </li>
                )
              })}
           
          </ul>
          <div className="footer__location">
            <div className="location__wrapper">
              {footer.Address.map(item=>{
                return(
                  <div className="location__item" key={item.id}>
                  <img src={item.svg.data.attributes.url} alt={item.alt ?item.alt : item.svg.data.attributes.alternativeText} />
                  <div className="location__text">
                    <h4>{item.title}</h4>
                    <p>{item.sub_title}</p>
                  </div>
                </div>
                )
              })}
              {/* <div className="location__item">
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
              </div> */}

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
         
          <ReactMarkdown>{footer.description && footer.description}</ReactMarkdown>
        </div>
      </div>
      <div className="container">               
       
      <div className="footer__bottom">
            
        <Link to="/privacy-policy" className="bottom__link" onClick={(e)=> getLinkText(e)}>Privacy Policy | Terms and Conditions</Link>
        {/* <Link to="/terms-conditions" className="bottom__link">Terms and Conditions</Link> */}
        <Link to="/accessibility-policy" className="bottom__link" onClick={(e)=> getLinkText(e)}>Accessibility Policy and Commitment Statement</Link>
        <p>  This website is attorney advertising and is administered by 
          <a className="gm"  href="https://robertgerov.com/">Robert Gerov Media</a>
        </p>
      </div>
      </div> 

      <a href="tel: 917-856-1247" className="footer-sticky-call-btn">CALL US</a>
    </footer>
  );
}

export default Footer;
