import { Conversation, Pagination } from "../../@types";
import { baseApi } from "./base";

type GetConversationsParams = {
  page?: number;
};

export const conversationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query<
      Pagination<Conversation[]>,
      GetConversationsParams
    >({
      query: ({ page = 1 }) => `/conversations?_page=${page}&_limit=10`,
      providesTags: (result) =>
        result
          ? [
              { type: "conversations", id: "CONVERSATION_LIST" },
              ...result.data.map((item) => ({
                type: "conversations" as const,
                id: item.id,
              })),
            ]
          : [],
      transformResponse: (response: Conversation[], meta) => {
        const haveMore = !!meta?.response?.headers.get("Link");

        return {
          haveMore,
          data: response,
        };
      },
    }),
  }),
});

export const { useGetConversationsQuery } = conversationsApi;
