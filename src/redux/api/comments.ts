import { Comment } from "../../@types";
import { baseApi } from "./base";

type CommentsParams = {
  postID: string;
};

type AddCommentParams = {
  comment: string;
  postID: string;
  userID: string;
};

export const commentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], CommentsParams>({
      query: ({ postID }) => `/comments?postID=${postID}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map((item) => ({
                type: "comments" as const,
                id: item.id,
              })),
              {
                type: "comments",
                id: "COMMENTS_LIST",
              },
            ]
          : [],
    }),
    addComment: builder.mutation<Comment, AddCommentParams>({
      query: ({ comment, postID, userID }) => ({
        url: `/comments`,
        method: "post",
        body: { comment, postID, userID },
      }),
      invalidatesTags: [
        { type: "comments", id: "COMMENTS_LIST" },
        { type: "posts", id: "POST_LIST" },
      ],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation } = commentsApi;
