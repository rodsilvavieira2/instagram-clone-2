import { lazy } from "react";

export const HomePage = lazy(() => import("./home"));
export const SavedPage = lazy(() => import("./saved"));
export const SuggestionsPage = lazy(() => import("./suggestions"));
export const ExplorePage = lazy(() => import("./explore"));
export const DirectPage = lazy(() => import("./direct"));

export const MainProfilePage = lazy(() => import("./profile/main-profile"));
export const PublicationTabSection = lazy(
  () => import("./profile/publications-tab")
);
export const SavedTabSection = lazy(() => import("./profile/saved-tab"));
export const MarkedTabSection = lazy(() => import("./profile/marked-tab"));
