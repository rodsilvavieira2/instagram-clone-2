import { useEffect, useRef } from "react";
import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";

import {
  useGetCommentsQuery,
  useAddCommentMutation,
} from "../../../redux/api/comments";
import {
  useGetPostMutation,
  useToggleLikeMutation,
} from "../../../redux/api/posts";
import { selectPostById } from "../../../redux/slices";
import { useAppSelector } from "../../../redux/store";
import { Skeleton } from "../../animations";
import { PostActions } from "../../post/post-actions";
import { PostComment } from "../../post/post-comment";
import { PostCommentInput } from "../../post/post-comment-input";
import { PostFromDate } from "../../post/post-from-date";
import { PostGallery } from "../../post/post-gallery";
import { PostHeader } from "../../post/post-header";
import { PostLikes } from "../../post/post-likes";
import { CloseButton, scaleDownAnimation } from "../shared";
import { CommentModalDescription } from "./comment-modal-description";
import { Loading } from "./loading";
import styles from "./modal.module.css";
import { PostHeaderSkeleton } from "./post-header-skeleton";
import { PostInfoSkeleton } from "./post-info-skeleton";
import {
  Container,
  PhotoSection,
  CommentsSection,
  CommentsList,
  CommentListWrapper,
  InnerCommentsSection,
} from "./styles";

Modal.setAppElement("body");

type ModalRenderProps = {
  postID: string;
};

function ModalRender({ postID }: ModalRenderProps) {
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, []);

  const { data: comments = [], isLoading: isLoadingComments } =
    useGetCommentsQuery({ postID });

  const postData = useAppSelector((state) => selectPostById(state, postID));

  const [addComment] = useAddCommentMutation();
  const [togglePostLike] = useToggleLikeMutation();
  const [getPost, data] = useGetPostMutation();

  const {
    user,
    createdAt = "",
    description = "",
    likesCount = 0,
    whoLiked = [],
    gallery = [],
  } = postData || data.data || {};

  useEffect(() => {
    if (!postData) {
      getPost({ postID });
    }
  }, [postData]);

  const { avatarUrl = "", userName = "", id: userID = "" } = user || {};

  function handleOnOpenComments() {
    messageInputRef.current?.focus();
  }

  async function onToggleLike() {
    await togglePostLike({ postID, userID });
  }

  function iLiked() {
    return !!whoLiked.find((item) => item === userID);
  }

  return (
    <BrowserRouter>
      <Container
        variants={scaleDownAnimation}
        initial="initial"
        animate="animate"
        transition={{
          damping: 0,
          stiffness: 0,
          duration: 0.1,
        }}
      >
        <PhotoSection>
          {postData || data.data ? (
            <PostGallery items={gallery} />
          ) : (
            <Skeleton style={{ width: "100%", height: "100%" }} />
          )}
        </PhotoSection>

        <CommentsSection>
          <InnerCommentsSection>
            {postData || data.data ? (
              <PostHeader
                userName={userName}
                avatarUrl={avatarUrl}
                onMore={() => console.log("more")}
              />
            ) : (
              <PostHeaderSkeleton />
            )}

            <CommentListWrapper>
              {postData ||
                (data.data && (
                  <>
                    <CommentModalDescription
                      avatarUrl={avatarUrl}
                      description={description}
                      userName={userName}
                      createdAt={createdAt}
                    />

                    <CommentsList>
                      {isLoadingComments ? (
                        <Loading />
                      ) : (
                        comments.map((comment) => (
                          <li key={comment.id}>
                            <PostComment {...comment} />
                          </li>
                        ))
                      )}
                    </CommentsList>
                  </>
                ))}
            </CommentListWrapper>

            {postData || data.data ? (
              <>
                <PostActions
                  onOpenComments={handleOnOpenComments}
                  onToggleLike={onToggleLike}
                  isLiked={iLiked()}
                />

                <PostLikes>{likesCount}</PostLikes>

                <PostFromDate
                  style={{ padding: "0 16px", marginBottom: "16px" }}
                >
                  {createdAt}
                </PostFromDate>

                <PostCommentInput
                  onComment={async ({ comment }) => {
                    await addComment({
                      comment,
                      postID,
                      userID: user?.id ?? "",
                    });
                  }}
                  ref={messageInputRef}
                />
              </>
            ) : (
              <PostInfoSkeleton />
            )}
          </InnerCommentsSection>
        </CommentsSection>
      </Container>
    </BrowserRouter>
  );
}

type CommentsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  postID: string | undefined;
};

export function CommentsModal({
  isOpen,
  onClose,
  postID = "",
}: CommentsModalProps) {
  return (
    <Modal
      overlayClassName={styles.commentsModalOverlay}
      className={styles.commentsContainerModal}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <ModalRender postID={postID} />

      <CloseButton onClose={onClose} />
    </Modal>
  );
}
