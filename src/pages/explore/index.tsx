import { useEffect, useState } from "react";

import { Explore as ExploreType } from "../../@types";
import { Spinner, PostGallery } from "../../components";
import { useInfinityScrollTrigger } from "../../hooks";
import { useGetExploreQuery } from "../../redux/api/explore";
import { ExploreLoading } from "./explore-loading";
import { Container, InnerContainer, LoadingContainer } from "./styles";

export default function Explore() {
  const [currentItems, setCurrentItems] = useState<ExploreType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: explore = { data: [], haveMore: false },
    isLoading,
    isFetching,
  } = useGetExploreQuery({ page: currentPage });

  useEffect(() => {
    if (explore.data.length) {
      setCurrentItems((prev) => [...prev, ...explore.data]);
    }
  }, [explore.data]);

  const [lastRefExploreItem] = useInfinityScrollTrigger({
    handler: () => {
      if (!isFetching && explore.haveMore) {
        setCurrentPage((prev) => prev + 1);
      }
    },
  });

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <InnerContainer>
          {currentItems.map((item, i) => (
            <PostGallery
              className={i % 2 === 0 ? "grid-tall" : "grid-wide"}
              ref={
                i + 1 === currentItems.length ? lastRefExploreItem : undefined
              }
              style={{
                width: "100%",
                height: "100%",
              }}
              key={item.id}
              {...item}
            />
          ))}
        </InnerContainer>
      )}

      {!isLoading && isFetching && <ExploreLoading />}
    </Container>
  );
}
