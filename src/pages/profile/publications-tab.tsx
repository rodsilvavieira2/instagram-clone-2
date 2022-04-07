import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { Post } from "../../@types";
import { PublicationTab } from "../../components";
import { useGetPublicationsQuery } from "../../redux/api/profile";
import {
  setCommentsModalInfo,
  setCurrentProfilePage,
} from "../../redux/slices";
import { useAppDispatch } from "../../redux/store";

type PublicationsTabSectionParams = {
  userName: string;
};

export default function PublicationsTabSection() {
  const { userName = "" } = useParams<PublicationsTabSectionParams>();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<Post[]>([]);

  const {
    data = { data: [], haveMore: false },
    isLoading,
    isFetching,
  } = useGetPublicationsQuery({
    userName,
    page: currentPage,
  });

  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(setCurrentProfilePage("publication"));
  }, [appDispatch, setCurrentProfilePage]);

  const onOpenPost = useCallback((id: string) => {
    appDispatch(setCommentsModalInfo({ isOpen: true, publicationId: id }));
  }, []);

  useEffect(() => {
    if (data.data.length) {
      setCurrentItems((prev) => [...prev, ...data.data]);
    }
  }, [data.data]);

  const onLoadMore = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  }, []);

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
    <PublicationTab
      isFetching={isFetching}
      haveMore={data.haveMore}
      onLoadMore={onLoadMore}
      isLoading={isLoading}
      items={transformedData}
      onOpenPost={onOpenPost}
    />
  );
}
