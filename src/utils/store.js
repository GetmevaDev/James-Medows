import { configureStore } from "@reduxjs/toolkit";
import pages from "./pages";


const store = configureStore({
  reducer: {
    pagesData:pages
  }
})

export default store