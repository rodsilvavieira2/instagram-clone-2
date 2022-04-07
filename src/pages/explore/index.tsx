import { useCallback, useEffect, useMemo, useState } from "react";

import { Post } from "../../@types";
import { Spinner, PostGallery } from "../../components";
import { useInfinityScrollTrigger } from "../../hooks";
import { useGetExploreQuery } from "../../redux/api/explore";
import { setCommentsModalInfo } from "../../redux/slices";
import { useAppDispatch } from "../../redux/store";
import { ExploreLoading } from "./explore-loading";
import { Container, InnerContainer, LoadingContainer } from "./styles";

export default function Explore() {
  const [currentItems, setCurrentItems] = useState<Post[]>([]);
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

  const dispatch = useAppDispatch();

  const onOpenComments = useCallback((id: string) => {
    dispatch(
      setCommentsModalInfo({
        isOpen: true,
        publicationId: id,
      })
    );
  }, []);

  const [lastRefExploreItem] = useInfinityScrollTrigger({
    handler: () => {
      if (!isFetching && explore.haveMore) {
        setCurrentPage((prev) => prev + 1);
      }
    },
  });

  const transformedData = useMemo(() => {
    return currentItems.map((item) => {
      return {
        ...item,
        featuredPhotoUrl: item.gallery[0].url,
        photosCount: item.gallery.length,
      };
    });
  }, [currentItems]);

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <InnerContainer>
          {transformedData.map((item, i) => (
            <PostGallery
              className={i % 2 === 0 ? "grid-tall" : "grid-wide"}
              onOpenPost={onOpenComments}
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
