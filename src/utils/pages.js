import { createSlice } from "@reduxjs/toolkit";

const pages = createSlice({
  name: "pagesData",
  initialState: {
    homePage: {},
    aboutPage:{},
    footer:{},
    currentPage:"",
    subLink:''
  },
  reducers: {
    homePageData: (state, action) => {
      state.homePage = action.payload;
    },
    aboutPageData: (state, action) => {
      state.aboutPage = action.payload;
    },
    footerData:(state, action)=> {
      state.footer = action.payload
    },
    getCurrentPage:(state, action)=> {
      state.currentPage = action.payload
    },
    getSubLink:(state, action)=> {
      state.subLink = action.payload
    }
  },
});

export const { homePageData, aboutPageData, footerData , getCurrentPage, getSubLink} = pages.actions;
export default pages.reducer;
