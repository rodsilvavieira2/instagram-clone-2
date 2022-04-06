import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { Post } from "../../@types";
import { postsApi } from "../api/posts";
import { RootState } from "../store";

const postsAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
});

export const postsSlice = createSlice({
  name: "posts",
  reducers: {},
  initialState: postsAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        postsAdapter.setAll(state, action.payload.data);
      }
    );
  },
});

export const { selectById: selectPostById } =
  postsAdapter.getSelectors<RootState>((state) => state.posts);
