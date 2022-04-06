import { CSSProperties, forwardRef, ForwardRefRenderFunction } from "react";

import { Post as PostType } from "../../@types";
import { PostActions } from "./post-actions";
import { PostCommentInput } from "./post-comment-input";
import { PostDescription } from "./post-description";
import { PostFromDate } from "./post-from-date";
import { PostGallery } from "./post-gallery";
import { PostHeader } from "./post-header";
import { PostLikes } from "./post-likes";
import { CommentsCount, Container } from "./styles";

type PostOnCommentParams = {
  postID: string;
  comment: string;
};

export type PostProps = Pick<
  PostType,
  | "gallery"
  | "likesCount"
  | "createdAt"
  | "id"
  | "user"
  | "description"
  | "whoLiked"
  | "updatedAt"
  | "commentsCount"
> & {
  currentUserId: string;
  style?: CSSProperties;
  onToggleLike: (id: string) => void;
  onMoreOptions: (id: string) => void;
  onOpenComments: (id: string) => void;
  onComment: (data: PostOnCommentParams) => Promise<void>;
};

const Base: ForwardRefRenderFunction<HTMLDivElement, PostProps> = (
  {
    gallery,
    likesCount,
    createdAt,
    description,
    commentsCount,
    onMoreOptions,
    onOpenComments,
    id,
    user,
    onToggleLike,
    currentUserId,
    whoLiked,
    onComment,
    style,
  },
  ref
) => {
  const { avatarUrl, userName } = user;

  return (
    <Container ref={ref} style={style}>
      <PostHeader
        userName={userName}
        avatarUrl={avatarUrl}
        onMore={() => onMoreOptions(id)}
      />

      <PostGallery items={gallery} />

      <PostActions
        isLiked={!!whoLiked.find((whoLikedId) => currentUserId === whoLikedId)}
        onOpenComments={() => onOpenComments(id)}
        onToggleLike={() => onToggleLike(id)}
      />

      <PostLikes>{likesCount}</PostLikes>

      <PostDescription text={description} userName={userName} />

      <CommentsCount onClick={() => onOpenComments(id)}>
        Ver todos os {commentsCount} comentários
      </CommentsCount>

      <PostFromDate style={{ padding: "0 16px", marginBottom: "16px" }}>
        {createdAt}
      </PostFromDate>

      <PostCommentInput
        onComment={({ comment }) => onComment({ comment, postID: id })}
      />
    </Container>
  );
};

export const Post = forwardRef(Base);
