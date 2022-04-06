import { useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

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

  const { data = [], isLoading } = useGetPublicationsQuery({ userName });

  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(setCurrentProfilePage("publication"));
  }, [appDispatch, setCurrentProfilePage]);

  const onOpenPost = useCallback((id: string) => {
    appDispatch(setCommentsModalInfo({ isOpen: true, publicationId: id }));
  }, []);

  const transformedData = useMemo(() => {
    return data.map((item) => {
      return {
        ...item,
        featuredPhotoUrl: item.gallery[0].url,
        photosCount: item.gallery.length,
      };
    });
  }, [data]);

  return (
    <PublicationTab
      isLoading={isLoading}
      items={transformedData}
      onOpenPost={onOpenPost}
    />
  );
}
