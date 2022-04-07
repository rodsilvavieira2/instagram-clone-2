import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { Post } from "../../@types";
import { PostGallery } from "../../components";
import { useInfinityScrollTrigger } from "../../hooks";
import { useGetSavedCollectionQuery } from "../../redux/api/profile";
import { setCommentsModalInfo } from "../../redux/slices";
import { useAppDispatch } from "../../redux/store";
import { Loading } from "./loading";
import { LoadingMore } from "./loading-more";
import {
  Container,
  CollectionName,
  InnerContainer,
  BackLink,
  BackArrow,
} from "./styles";

type SavedPageParams = {
  collectionName: string;
  userName: string;
};

export default function Saved() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<Post[]>([]);
  const { collectionName, userName } = useParams<SavedPageParams>();

  const {
    data = { data: [], haveMore: false },
    isLoading,
    isFetching,
  } = useGetSavedCollectionQuery({
    page: currentPage,
  });

  useEffect(() => {
    if (data.data.length) setCurrentItems((prev) => [...prev, ...data.data]);
  }, [data.data]);

  const appDispatch = useAppDispatch();

  const transformedData = useMemo(() => {
    return currentItems.map((item) => {
      return {
        ...item,
        featuredPhotoUrl: item.gallery[0].url,
        photosCount: item.gallery.length,
      };
    });
  }, [currentItems]);

  const onOpenPost = useCallback((id: string) => {
    appDispatch(setCommentsModalInfo({ isOpen: true, publicationId: id }));
  }, []);

  const [lastSavedItemRef] = useInfinityScrollTrigger({
    handler: () => {
      if (!isFetching && data.haveMore) {
        setCurrentPage((prev) => prev + 1);
      }
    },
  });

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BackLink to={`/${userName}/saved`}>
            <BackArrow /> Salvos
          </BackLink>

          <CollectionName>{collectionName}</CollectionName>

          <InnerContainer>
            {transformedData.map((item, i) => (
              <PostGallery
                ref={i + 1 === transformedData.length ? lastSavedItemRef : null}
                key={item.id}
                {...item}
                onOpenPost={onOpenPost}
              />
            ))}
          </InnerContainer>

          {isFetching && <LoadingMore />}
        </>
      )}
    </Container>
  );
}
