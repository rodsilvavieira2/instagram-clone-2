import { Post, Saved, User } from "../../@types";
import { baseApi } from "./base";

type GetByUserName = {
  userName: string;
};

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<User, GetByUserName>({
      query: ({ userName }) => `/users?userName=${userName}`,
      providesTags: (result) =>
        result ? [{ type: "users", id: result.id }] : [],
      transformResponse: (result: User[]) => result[0],
    }),
    getPublications: builder.query<Post[], GetByUserName>({
      query: ({ userName }) => `/posts?user.userName=${userName}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "profile_publications" as const,
                id,
              })),
              {
                type: "profile_publications",
                id: "profile_publications_list",
              },
            ]
          : [],
    }),
    getSaved: builder.query<Saved[], GetByUserName>({
      query: ({ userName }) => `/saved?user.userName=${userName}`,
    }),
  }),
});

export const { useGetProfileQuery, useGetPublicationsQuery, useGetSavedQuery } =
  profileApi;
