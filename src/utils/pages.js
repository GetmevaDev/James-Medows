import { createSlice } from "@reduxjs/toolkit";

const pages = createSlice({
  name: "pagesData",
  initialState: {
    homePage: {},
    aboutPage:{},
    logo:[],
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
    logoData:(state, action)=> {
      state.logo = action.payload
    },
    getCurrentPage:(state, action)=> {
      state.currentPage = action.payload
    },
    getSubLink:(state, action)=> {
      state.subLink = action.payload
    }
  },
});

export const { homePageData, aboutPageData, logoData , getCurrentPage, getSubLink} = pages.actions;
export default pages.reducer;
