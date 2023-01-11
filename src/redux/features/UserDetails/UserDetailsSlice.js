import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: [],
  isEmpty: true,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setIsEmpty: (state, action) => {
      state.isEmpty = action.payload;
    },
  },
});

export const { setUserDetails, setIsEmpty } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
