import React, { useEffect,  useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/header.css";
import { useDispatch } from "react-redux";
import { footerData, getCurrentPage, getSubLink } from "../utils/pages";

function Header() {
  const dispatch = useDispatch()
  const [headerInfo, setHeaderInfo] = useState(null);
  const[isOpen, setIsOpen]=useState(true)
  const[isScroll, setIsScroll]= useState(false)
  // changeMind function is for MODAL
  function changeMind(){
    setIsOpen((prev)=> !prev)
  }

  function closeModal(){
    setIsOpen(true)
  }
  useEffect(() => {
    async function getData() {
      let data = await fetch(
        "https://cms-james-medows.herokuapp.com/api/layout?populate=deep"
      );
      let json = await data.json();
      const {Header, Footer} = json.data.attributes
  
      dispatch(footerData(Footer))
      setHeaderInfo(Header)
  
      
    }
    
    getData();
  }, [dispatch]);
 


  // this getLinkText function is for BREADCRUMBS
  function getLinkText(e){
    dispatch(getCurrentPage(e.target.textContent))
    dispatch(getSubLink(''))
    closeModal()
  }
  function changeNav() {
  
      const scrollY = window.scrollY;
      if(scrollY >100){
        setIsScroll(true)
      }else {
        setIsScroll(false)
      }
  
    
  }

  window.addEventListener("scroll", changeNav)
  // check data (early return)
  if(!headerInfo) return null
  return (
    <header className={isScroll ?"header min":"header"}>
      <div className="container">
        <div className="header__grid">
          <div className={isScroll ? "header__logo min":"header__logo"}>
            <Link to="/">
              <img loading="lazy" src={headerInfo.Logo.data.attributes.url} alt={headerInfo.Logo.data.attributes.alternativeText} />
            </Link>
          </div>
          <nav className={isScroll? "header__nav min" : "header__nav" }>
            <ul className= "nav__list" >
              {headerInfo.HeaderItem.map(item=>{
                return(
                  <li className="list__item" key={item.id}>
                  <NavLink to={item.link} className="nav__link" onClick={(e)=> getLinkText(e)}>
                    {item.name}
                  </NavLink>
                </li>
                )
              })}
            
              
            </ul>
          </nav>
          <div className='burger' onClick={changeMind}>
            <div className={isOpen? 'burger__item': 'burger__item item1'}></div>
            <div className={isOpen? 'burger__item': 'burger__item item2'}></div>
            <div className={isOpen? 'burger__item': 'burger__item item3'}></div>
          </div>
          <div className={!isOpen ?"modal active__modal":"modal"}>
          <ul className= "modal--nav__list" >
              <li className="modal--list__item">
                <NavLink onClick={closeModal} to="/" className="nav__link">
                  Home
                </NavLink>
              </li>
              <li className="modal--list__item">
                <NavLink  to="/about-us" className="nav__link" onClick={(e)=> getLinkText(e)}>
                  About Us
                </NavLink>
              </li>
              <li className="modal--list__item">
                <NavLink  to="/practice-areas" className="nav__link" onClick={(e)=> getLinkText(e)}>
                  Practice Areas
                </NavLink>
              </li>
               {/* <li className="modal--list__item">
                <NavLink  to="/courts-we-cover" className="nav__link" onClick={(e)=> getLinkText(e)}>
                  Courts We Cover
                </NavLink>
              </li>
              <li className="modal--list__item">
                <NavLink  to="/reviews" className="nav__link" onClick={(e)=> getLinkText(e)}>
                  Reviews
                </NavLink>
              </li>
              <li className="modal--list__item">
                <NavLink  to="/contact" className="nav__link" onClick={(e)=> getLinkText(e)}>
                  Contact Us
                </NavLink>
              </li>  */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
