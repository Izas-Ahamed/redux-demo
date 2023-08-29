import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

//using createAsyncThunk function which returns pending, fulfilled and rejected action types
const fetchUsersFromAPI = createAsyncThunk("users/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(({ data }) => data);
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsersFromAPI.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsersFromAPI.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsersFromAPI.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const fetchUsers = fetchUsersFromAPI;
