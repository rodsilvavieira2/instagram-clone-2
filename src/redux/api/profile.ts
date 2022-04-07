import { Pagination, Post, Saved, User } from "../../@types";
import { baseApi } from "./base";

type GetByUserName = {
  userName: string;
  page?: number;
};

type GetSavedParams = {
  page?: number;
};

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<User, GetByUserName>({
      query: ({ userName }) => `/users?userName=${userName}`,
      providesTags: (result) =>
        result ? [{ type: "users", id: result.id }] : [],
      transformResponse: (result: User[]) => result[0],
    }),
    getPublications: builder.query<Pagination<Post[]>, GetByUserName>({
      query: ({ userName, page = 1 }) =>
        `/posts?user.userName=${userName}&_page=${page}&_limit=10`,
      transformResponse: (response: Post[], meta) => {
        const haveMore = !!meta?.response?.headers.get("Link");

        return {
          haveMore,
          data: response,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
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
    getSavedCollection: builder.query<Pagination<Post[]>, GetSavedParams>({
      query: ({ page = 1 }) => `/posts?_page=${page}&_limit=10`,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map((item) => ({
                type: "posts" as const,
                id: item.id,
              })),
            ]
          : [],
      transformResponse: (response: Post[], meta) => {
        const haveMore = !!meta?.response?.headers.get("Link");

        return {
          haveMore,
          data: response,
        };
      },
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetPublicationsQuery,
  useGetSavedQuery,
  useGetSavedCollectionQuery,
} = profileApi;
