import { Comment } from "../../../@types";
import { Avatar } from "../../avatar";
import { PostFromDate } from "../post-from-date";
import {
  Container,
  AvatarWrapper,
  CommentWrapper,
  UserName,
  PostActions,
  ResponseButton,
  MoreOptionsButton,
  MoreHorizontalIcon,
} from "./styles";

type PostCommentProps = Comment;

export function PostComment({ createdAt, comment, user }: PostCommentProps) {
  const { avatarUrl, userName } = user;

  return (
    <Container>
      <AvatarWrapper>
        <Avatar size="medium" src={avatarUrl} alt={userName} />
      </AvatarWrapper>

      <CommentWrapper>
        <div>
          <UserName>{userName}</UserName> {comment}
        </div>

        <PostActions>
          <PostFromDate>{createdAt}</PostFromDate>

          <ResponseButton>Responder</ResponseButton>

          <MoreOptionsButton
            className="more-options-button"
            aria-label="mais opções"
          >
            <MoreHorizontalIcon />
          </MoreOptionsButton>
        </PostActions>
      </CommentWrapper>
    </Container>
  );
}
