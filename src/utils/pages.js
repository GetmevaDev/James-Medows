import { createSlice } from "@reduxjs/toolkit";

const pages = createSlice({
  name: "pagesData",
  initialState: {
    homePage: {},
    aboutPage:{},
    logo:[]
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
    }
  },
});

export const { homePageData, aboutPageData, logoData } = pages.actions;
export default pages.reducer;
