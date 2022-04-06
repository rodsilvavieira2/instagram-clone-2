/* eslint-disable no-unused-expressions */
import { Suggestion } from "../../@types";
import { baseApi } from "./base";

const suggestionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSuggestions: builder.query<Suggestion[], undefined>({
      query: () => "/suggestions",
      providesTags: (result) =>
        result
          ? [
              {
                type: "suggestions",
                id: "SUGGESTIONS_LIST",
              },
              ...result.map(({ id }) => ({ type: "suggestions" as const, id })),
            ]
          : [{ type: "suggestions", id: "SUGGESTION_LIST" }],
    }),
    toggleFollowing: builder.mutation<Suggestion, { id: string }>({
      query: ({ id }) => ({
        url: `/suggestions/${id}/toggle-following`,
        method: "put",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "suggestions", id }],
    }),
  }),
});

export const { useGetSuggestionsQuery, useToggleFollowingMutation } =
  suggestionsApi;
