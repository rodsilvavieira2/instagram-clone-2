import {
  Container,
  PublicationStatusInner,
  StatusItem,
  CommentsIcon,
  LikesIcon,
} from "./styles";

type PublicationStatusProps = {
  likes: number;
  commentsCount: number;
};

export const PublicationStatus = ({
  commentsCount,
  likes,
}: PublicationStatusProps) => {
  return (
    <Container>
      <PublicationStatusInner>
        <StatusItem>
          <LikesIcon /> {likes}
        </StatusItem>

        <StatusItem>
          <CommentsIcon /> {commentsCount}
        </StatusItem>
      </PublicationStatusInner>
    </Container>
  );
};
