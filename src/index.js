import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
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
import CDLHoldersGuide from "./pages/CDLHoldersGuide";
import CDLLongbookViolations from "./pages/CDLLongbookViolations";
import CDLOverweightViolations from "./pages/CDLOverweightViolations";
import CDLSuspensionsAndDisqualifications from "./pages/CDLSuspensionsAndDisqualifications";
import NYTRafficTicketsAndCSAScores from "./pages/NYTrafficTicketsAndCSAScores";
import LeavingSceneOfAccidnet from "./pages/LeavingSceneOfAccident";
import RecklessDrivingLawyer from "./pages/RecklessDrivingLawyer";
import DrivingWhileSuspended from "./pages/DrivingWhileSuspended";
import DWI from "./pages/DWI";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/practice-areas",
        element: <PracticeAreas />,
      },
      {
        path: "/courts-we-cover",
        element: <CourtsWeCover />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/accessibility-policy",
        element: <AccessibilityPolicy />,
      },

      {
        path: "/practice-areas/speeding-tickets",
        element: <SpeedingTickets />,
      },
      {
        path: "/practice-areas/sell-phone-tickets",
        element: <SellPhoneTickets />,
      },
      {
        path: "/practice-areas/move-over-law-traffic-tickets",
        element: <MakeOverLaw />,
      },
      {
        path: "/practice-areas/cdl-traffic-tickets",
        element: <CDL />,
      },
      {
        path: "/practice-areas/junior-license-traffic-tickets",
        element: <JuniorLicense />,
      },
      {
        path: "/practice-areas/driving-without-insurance-tickets",
        element: <DrivingWithout />,
      },
      {
        path: "/practice-areas/suspended-revoked-vehicle-registration",
        element: <SuspendedRevoked />,
      },
      {
        path: "/practice-areas/driving-without-insurance-traffic-tickets",
        element: <DrivingWithoutTraffic />,
      },
      {
        path: "/practice-areas/failure-to-appear-in-ny-traffic-court-in-ny",
        element: <FailureToAppear />,
      },
      {
        path: "/practice-areas/failure-to-file-accident-report-in-ny",
        element: <FailureToFile />,
      },
      {
        path: "/practice-areas/failure-to-pay-child-support-in-ny",
        element: <FailureToPay />,
      },
      {
        path: "/practice-areas/fault-in-a-fatal-car-accident-in-ny",
        element: <FaultInAFatalCarAccident />,
      },
      {
        path: "/practice-areas/violating-a-court-judgment",
        element: <ViolatingCourtJudgment />,
      },
      {
        path: "/practice-areas/cdl-holders-guide-to-fmcsas-dsms",
        element: <CDLHoldersGuide />,
      },
      {
        path: "/practice-areas/cdl-longbook-violations-in-ny",
        element: <CDLLongbookViolations />,
      },
      {
        path: "/practice-areas/cdl-overweight-violations-in-ny",
        element: <CDLOverweightViolations />,
      },
      {
        path: "/practice-areas/cdl-suspensions-and-disqualifications-in-ny",
        element: <CDLSuspensionsAndDisqualifications />,
      },
      {
        path: "/practice-areas/ny-traffic-tickets-and-csa-scores",
        element: <NYTRafficTicketsAndCSAScores />,
      },
      {
        path: "/practice-areas/leaving-scene-of-accident-in-ny",
        element: <LeavingSceneOfAccidnet />,
      },
      {
        path: "/practice-areas/reckless-driving-lawyer-in-ny",
        element: <RecklessDrivingLawyer />,
      },
      {
        path: "/practice-areas/driving-while-suspended-in-ny",
        element: <DrivingWhileSuspended />,
      },
      {
        path: "/practice-areas/dwi-in-ny",
        element: <DWI />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
