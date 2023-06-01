import { createSlice } from "@reduxjs/toolkit";

const pages = createSlice({
  name: "pagesData",
  initialState: {
    homePage: {},
    aboutPage:{}
  },
  reducers: {
    homePageData: (state, action) => {
      state.homePage = action.payload;
    },
    aboutPageData: (state, action) => {
      state.aboutPage = action.payload;
    },
  },
});

export const { homePageData, aboutPageData } = pages.actions;
export default pages.reducer;
