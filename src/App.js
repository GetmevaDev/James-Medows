import React,{useEffect, useState}  from 'react';
import './App.css';

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { useDispatch } from 'react-redux';
import { homePageData } from './utils/pages';

function App() {
  const dispatch = useDispatch()
  const[data, setData] = useState(null)
  async function getHomePageData(){
    let data = await fetch(
      "https://cms-james-medows.herokuapp.com/api/home-page?populate=deep"
    );
    let json = await data.json();
    setData(json)
    dispatch(homePageData(json))
  }
  useEffect(()=> {
    getHomePageData()
  },[])


  return (
    
    <div className="App">
      {!data ? <Loader /> : (
        <>
        <Header />
          <Outlet />  
        <Footer />
        </>
      )}
      
    </div>
  );
}

export default App;
