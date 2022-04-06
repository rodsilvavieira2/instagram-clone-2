import { Explore } from "../../@types";
import { baseApi } from "./base";

const exploreAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getExplore: builder.query<Explore[], void>({
      query: () => "/explore",
      providesTags: (result) =>
        result
          ? [
              ...result.map((item) => ({
                type: "explore" as const,
                id: item.id,
              })),
            ]
          : [],
    }),
  }),
});

export const { useGetExploreQuery } = exploreAPi;
