import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { MarkedTab } from "../../components";
import { useGetPublicationsQuery } from "../../redux/api/profile";
import { setCurrentProfilePage } from "../../redux/slices";
import { useAppDispatch } from "../../redux/store";

type MarkedTabParams = {
  userName: string;
};

export default function MarkedTabSection() {
  const { userName = "" } = useParams<MarkedTabParams>();

  const { data = { data: [], haveMore: false }, isLoading } =
    useGetPublicationsQuery({ userName });

  const dispatch = useAppDispatch();

  const transformedData = useMemo(() => {
    return data.data.map((item) => {
      return {
        ...item,
        featuredPhotoUrl: item.gallery[0].url,
        photosCount: item.gallery.length,
      };
    });
  }, [data.data]);

  useEffect(() => {
    dispatch(setCurrentProfilePage("marked"));
  }, []);

  return <MarkedTab items={transformedData} isLoading={isLoading} />;
}
