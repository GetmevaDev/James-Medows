import React from "react";

import { RouterProvider, createBrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';


import App from './App';
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import SpeedingTickets from "./pages/SpeedingTickets";
import SellPhoneTickets from "./pages/SellPhoneTickets";
import CourtsWeCover from "./pages/CourtsWeCover";
import Reviews from "./pages/Reviews";
import ContactUs from "./pages/ContactUs";
import { Provider } from "react-redux";
import store from "./utils/store";
import PracticeAreas from "./pages/PracticeAreas";
import MakeOverLaw from "./pages/MakeOverLaw";
import CDL from "./pages/CDL";
import JuniorLicense from "./pages/JuniorLicense";
import DrivingWithout from "./pages/DrivingWithout";
import SuspendedRevoked from "./pages/SuspendedRevoked";
import DrivingWithoutTraffic from "./pages/DrivingWithoutTraffic";
import FailureToAppear from "./pages/FailureToAppear";
import FailureToFile from "./pages/FailureToFile";
import FailureToPay from "./pages/FailureToPay";
import FaultInAFatalCarAccident from "./pages/FaultInAFatalCarAccident";
import ViolatingCourtJudgment from "./pages/ViolatingCourtJudgment";




const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <PageNotFound />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/practice-areas",
       element: <PracticeAreas />
      },
      {
        path: "/courts-we-cover",
        element:<CourtsWeCover />
      },
      {
        path: "/reviews",
        element: <Reviews />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path:'/speeding-tickets',
        element:<SpeedingTickets />
      },
      {
        path: "/sell-phone-tickets",
        element:<SellPhoneTickets />
      },
      {
        path: "/make-over-law",
        element:<MakeOverLaw />
      },
      {
        path: "/cdl",
        element: <CDL />
      },
      {
        path: "/junior-license",
        element:<JuniorLicense />
      },
      {
        path: "/driving-without",
        element:<DrivingWithout />
      },
      {
        path: "/suspended-revoked",
        element:<SuspendedRevoked />
      },
      {
        path: "/driving-without-traffic",
        element:<DrivingWithoutTraffic />
      },
      {
        path: "/failure-to-appear",
        element:<FailureToAppear />
      },
      {
        path: "/failure-to-file",
        element:<FailureToFile />
      },
      {
        path: "/failure-to-pay",
        element:<FailureToPay />
      },
      {
        path: "/fault-in-car-accident",
        element:<FaultInAFatalCarAccident />
      },
      {
        path: "/violating-court-judgment",
        element:<ViolatingCourtJudgment />
      },
    ]
  }
])


const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}> <RouterProvider router={appRouter}/> </Provider>);

