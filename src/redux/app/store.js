import { configureStore } from "@reduxjs/toolkit";
import userDetailsSliceReducer from "../features/UserDetails/UserDetailsSlice";
import usersSliceReducer from "../features/Users/UsersSlice";

const store = configureStore({
  reducer: { userDetailsSliceReducer, usersSliceReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
