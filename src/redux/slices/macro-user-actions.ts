import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TabType } from "../../components";
import { RootState } from "../store";

type ModalInfo = {
  isOpen: boolean;
  publicationId: string | undefined;
};

type InitialState = {
  publicationOptionsModalInfo: ModalInfo;
  commentsModalInfo: ModalInfo;
  isNewCollectionModalOpen: boolean;
  isProfileSettingsModalOpen: boolean;
  currentProfilePage: TabType;
  searchValue: string;
};

const initialState: InitialState = {
  publicationOptionsModalInfo: {
    isOpen: false,
    publicationId: undefined,
  },
  commentsModalInfo: {
    isOpen: false,
    publicationId: undefined,
  },
  isNewCollectionModalOpen: false,
  isProfileSettingsModalOpen: false,
  currentProfilePage: "publication",
  searchValue: "",
};

export const macroUserActionsSlice = createSlice({
  name: "macroUserActions",
  initialState,
  reducers: {
    setPublicationOptionsModalInfo: (
      state,
      action: PayloadAction<ModalInfo>
    ) => {
      state.publicationOptionsModalInfo = action.payload;
    },
    setCommentsModalInfo: (state, action: PayloadAction<ModalInfo>) => {
      state.commentsModalInfo = action.payload;
    },
    setIsNewCollectionModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isNewCollectionModalOpen = action.payload;
    },
    setIsProfileSettingsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isProfileSettingsModalOpen = action.payload;
    },
    setCurrentProfilePage: (state, action: PayloadAction<TabType>) => {
      state.currentProfilePage = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setPublicationOptionsModalInfo,
  setCommentsModalInfo,
  setIsNewCollectionModalOpen,
  setIsProfileSettingsModalOpen,
  setCurrentProfilePage,
} = macroUserActionsSlice.actions;

export const selectPublicationOptionsModalInfo = (state: RootState) =>
  state.macroUserActions.publicationOptionsModalInfo;

export const selectCommentsModalInfo = (state: RootState) =>
  state.macroUserActions.commentsModalInfo;

export const selectIsNewCollectionModalOpen = (state: RootState) =>
  state.macroUserActions.isNewCollectionModalOpen;

export const selectIsProfileSettingsModalOpen = (state: RootState) =>
  state.macroUserActions.isProfileSettingsModalOpen;

export const selectCurrentProfilePage = (state: RootState) =>
  state.macroUserActions.currentProfilePage;

export const selectSearchValue = (state: RootState) =>
  state.macroUserActions.searchValue;
