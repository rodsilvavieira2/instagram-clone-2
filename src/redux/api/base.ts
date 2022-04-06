import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "../../@types";
import { config } from "../../config";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.baseURL }),
  endpoints: (builder) => ({
    getUser: builder.query<User, { userID: string }>({
      query: ({ userID }) => `/users/${userID}`,
    }),
  }),
  tagTypes: [
    "users",
    "suggestions",
    "posts",
    "profile_publications",
    "status",
    "comments",
    "conversations",
    "explore",
  ],
});

export const { useGetUserQuery } = baseApi;
