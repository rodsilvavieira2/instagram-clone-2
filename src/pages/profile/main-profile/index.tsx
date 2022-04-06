import { useCallback } from "react";
import { Outlet, useParams } from "react-router-dom";

import {
  TabType,
  StaticLoadingFullWindow,
  ProfileInfo,
  ProfileSections,
} from "../../../components";
import { useGetProfileQuery } from "../../../redux/api/profile";
import {
  selectCurrentProfilePage,
  setIsProfileSettingsModalOpen,
} from "../../../redux/slices";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { Container } from "./styles";

type ProfilePageParams = {
  userName: string;
  tab: TabType;
};

export default function MainProfile() {
  const dispatch = useAppDispatch();

  const { userName = "" } = useParams<ProfilePageParams>();

  const { data, isLoading } = useGetProfileQuery({ userName });

  const currentTab = useAppSelector(selectCurrentProfilePage);

  const onSettings = useCallback(() => {
    dispatch(setIsProfileSettingsModalOpen(true));
  }, []);

  if (isLoading) return <StaticLoadingFullWindow />;

  if (!data) return null;

  return (
    <Container>
      <ProfileInfo {...data} onSettings={onSettings} />

      <ProfileSections userName={userName} currentTab={currentTab} />

      <Outlet />
    </Container>
  );
}
