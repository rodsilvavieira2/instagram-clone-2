import { Conversation } from "../../@types";
import { baseApi } from "./base";

export const conversationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query<Conversation[], void>({
      query: () => "/conversations",
      providesTags: (result) =>
        result
          ? [
              { type: "conversations", id: "CONVERSATION_LIST" },
              ...result.map((item) => ({
                type: "conversations" as const,
                id: item.id,
              })),
            ]
          : [],
    }),
  }),
});

export const { useGetConversationsQuery } = conversationsApi;
