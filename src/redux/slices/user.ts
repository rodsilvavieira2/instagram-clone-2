import { createSlice } from "@reduxjs/toolkit";

import { User } from "../../@types";
import { baseApi } from "../api/base";
import { RootState } from "../store";

type InitialState = {
  currentUser: User | null;
};

const initialState: InitialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      baseApi.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload;
      }
    );
  },
});

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
