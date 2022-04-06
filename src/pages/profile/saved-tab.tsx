/* eslint-disable no-console */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { SavedTab } from "../../components";
import { useGetSavedQuery } from "../../redux/api/profile";
import { setCurrentProfilePage } from "../../redux/slices";
import { useAppDispatch } from "../../redux/store";

const onNewCollection = () => console.log("new collection");

type SavedTabSectionProps = {
  userName: string;
};

export default function SavedTabSection() {
  const { userName = "" } = useParams<SavedTabSectionProps>();

  const { data = [], isLoading } = useGetSavedQuery({ userName });

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("saved");
    dispatch(setCurrentProfilePage("saved"));
  }, [dispatch, setCurrentProfilePage]);

  return (
    <SavedTab
      items={data}
      isLoading={isLoading}
      onNewCollection={onNewCollection}
    />
  );
}
