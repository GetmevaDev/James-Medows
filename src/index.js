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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import AccessibilityPolicy from "./pages/AccessibilityPolicy";




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
        path:"/about-us",
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
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />
      },
      {
        path: "/accessibility-policy",
        element: <AccessibilityPolicy />
      },

      {
        path:'/practice-areas/speeding-tickets',
        element:<SpeedingTickets />
      },
      {
        path: "/practice-areas/sell-phone-tickets",
        element:<SellPhoneTickets />
      },
      {
        path: "/practice-areas/make-over-law",
        element:<MakeOverLaw />
      },
      {
        path: "/practice-areas/cdl",
        element: <CDL />
      },
      {
        path: "/practice-areas/junior-license",
        element:<JuniorLicense />
      },
      {
        path: "/practice-areas/driving-without",
        element:<DrivingWithout />
      },
      {
        path: "/practice-areas/suspended-revoked",
        element:<SuspendedRevoked />
      },
      {
        path: "/practice-areas/driving-without-traffic",
        element:<DrivingWithoutTraffic />
      },
      {
        path: "/practice-areas/failure-to-appear",
        element:<FailureToAppear />
      },
      {
        path: "/practice-areas/failure-to-file",
        element:<FailureToFile />
      },
      {
        path: "/practice-areas/failure-to-pay",
        element:<FailureToPay />
      },
      {
        path: "/practice-areas/fault-in-car-accident",
        element:<FaultInAFatalCarAccident />
      },
      {
        path: "/practice-areas/violating-court-judgment",
        element:<ViolatingCourtJudgment />
      },
    ]
  }
])


const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}> <RouterProvider router={appRouter}/> </Provider>);

