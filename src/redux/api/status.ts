import { Status } from "../../@types";
import { baseApi } from "./base";

export const statusApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStatus: builder.query<Status[], undefined>({
      query: () => "/status",
      providesTags: (result) =>
        result
          ? [
              { type: "status", id: "STATS_LIST_ALL" },
              ...result.map((item) => ({
                type: "status" as const,
                id: item.id,
              })),
            ]
          : [],
    }),
  }),
});

export const { useGetStatusQuery } = statusApi;
