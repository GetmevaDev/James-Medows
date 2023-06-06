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
        path:'/speeding-tickets',
        element:<SpeedingTickets />
      },
      {
        path: "/sell-phone-tickets",
        element:<SellPhoneTickets />
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
      }
    ]
  }
])


const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}> <RouterProvider router={appRouter}/> </Provider>);

