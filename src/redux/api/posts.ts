/* eslint-disable no-unused-expressions */
import { Pagination, Post } from "../../@types";
import { baseApi } from "./base";

type GetPostsResponse = Post[];
type GetPostsParams = {
  page?: number;
};

type ToggleLikeParams = { postID: string; userID: string };

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Pagination<GetPostsResponse>, GetPostsParams>({
      query: ({ page = 1 }) => `/posts?_page=${page}&_limit=10`,
      providesTags: (result) =>
        result
          ? [
              { type: "posts", id: "POST_LIST" },
              ...result.data.map(({ id }) => ({
                type: "posts" as const,
                id,
              })),
            ]
          : [{ type: "posts", id: "POST_LIST" }],
      transformResponse: (response: GetPostsResponse, meta) => {
        const haveMore = !!meta?.response?.headers.get("Link");

        return {
          haveMore,
          data: response,
        };
      },
    }),
    toggleLike: builder.mutation<void, ToggleLikeParams>({
      query: ({ postID, userID }) => ({
        url: `/posts/${postID}/${userID}/toggle-like`,
        method: "put",
      }),
      invalidatesTags: [{ type: "posts", id: "POST_LIST" }],
    }),
    getPost: builder.query<Post, { postID: string }>({
      query: ({ postID }) => `/posts/${postID}`,
      providesTags: (result) =>
        result ? [{ type: "posts" as const, id: result.id }] : [],
    }),
  }),
});

export const { useGetPostsQuery, useToggleLikeMutation, useGetPostQuery } =
  postsApi;
