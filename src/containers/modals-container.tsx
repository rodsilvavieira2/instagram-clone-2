import {
  PublicationOptionsModal,
  CommentsModal,
  NewCollectionModal,
  ProfileSettingsModal,
} from "../components";
import {
  selectPublicationOptionsModalInfo,
  selectCommentsModalInfo,
  selectIsNewCollectionModalOpen,
  selectIsProfileSettingsModalOpen,
  setPublicationOptionsModalInfo,
  setCommentsModalInfo,
  setIsNewCollectionModalOpen,
  setIsProfileSettingsModalOpen,
} from "../redux/slices";
import { useAppSelector, useAppDispatch } from "../redux/store";

export const ModalsContainer = () => {
  const publicationModalOptionsInfo = useAppSelector(
    selectPublicationOptionsModalInfo
  );

  const commentsModalInfo = useAppSelector(selectCommentsModalInfo);

  const isNewCollectionModalOpen = useAppSelector(
    selectIsNewCollectionModalOpen
  );

  const isProfileSettingsModalOpen = useAppSelector(
    selectIsProfileSettingsModalOpen
  );

  const dispatch = useAppDispatch();

  return (
    <>
      <PublicationOptionsModal
        isOpen={publicationModalOptionsInfo.isOpen}
        onClose={() =>
          dispatch(
            setPublicationOptionsModalInfo({
              isOpen: false,
              publicationId: undefined,
            })
          )
        }
      />

      <CommentsModal
        isOpen={commentsModalInfo.isOpen}
        postID={commentsModalInfo.publicationId}
        onClose={() =>
          dispatch(
            setCommentsModalInfo({ isOpen: false, publicationId: undefined })
          )
        }
      />

      <NewCollectionModal
        isOpen={isNewCollectionModalOpen}
        onClose={() => dispatch(setIsNewCollectionModalOpen(false))}
      />

      <ProfileSettingsModal
        isOpen={isProfileSettingsModalOpen}
        onClose={() => dispatch(setIsProfileSettingsModalOpen(false))}
      />
    </>
  );
};
