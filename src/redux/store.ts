import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./api/base";
import { macroUserActionsSlice, userSlice } from "./slices";

export const store = configureStore({
  reducer: {
    macroUserActions: macroUserActionsSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
