import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.users = action.payload),
          (state.error = "");
      }),
      builder.addCase(fetchUsers.rejected, (state, action) => {
        (state.isLoading = false),
          (state.users = []),
          (state.error = action.error.message);
      });
  },
});

export default usersSlice.reducer;
