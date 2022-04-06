import { Explore, Pagination } from "../../@types";
import { baseApi } from "./base";

type GetExploreParams = {
  page?: number;
};

type GetExploreResponse = Explore[];

const exploreAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getExplore: builder.query<Pagination<GetExploreResponse>, GetExploreParams>(
      {
        query: ({ page = 1 }) => `/explore?_page=${page}&_limit=10`,
        transformResponse: (response: GetExploreResponse, meta) => {
          const haveMore = !!meta?.response?.headers.get("Link");

          return {
            haveMore,
            data: response,
          };
        },
        providesTags: (result) =>
          result
            ? [
                ...result.data.map((item) => ({
                  type: "explore" as const,
                  id: item.id,
                })),
              ]
            : [],
      }
    ),
  }),
});

export const { useGetExploreQuery } = exploreAPi;
