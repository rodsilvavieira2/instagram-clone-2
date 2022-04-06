import { User } from "../../../../@types";
import { Avatar } from "../../../avatar";
import { PreviewActions } from "./preview-actions";
import { RecentPosts, RecentPostItem } from "./recent-posts";
import { StatusView } from "./status-view";
import {
  Container,
  InnerContainer,
  Heading,
  AvatarWrapper,
  Info,
  SubName,
  UserName,
  StatusInfo,
} from "./styles";

type PostProfilePreviewProps = {
  user: Pick<
    User,
    | "avatarUrl"
    | "subName"
    | "userName"
    | "id"
    | "flowing"
    | "followers"
    | "posts"
  >;
} & {
  recentPosts: RecentPostItem[];
  onMouseLeave: () => void;
  onMouseEnter: () => void;
};

export function PostProfilePreview({
  user,
  recentPosts,
  onMouseLeave,
  onMouseEnter,
}: PostProfilePreviewProps) {
  const { avatarUrl, userName, subName, posts, flowing, followers } = user;

  return (
    <Container>
      <InnerContainer onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
        <Heading>
          <AvatarWrapper>
            <Avatar size="large" src={avatarUrl} alt={userName} />
          </AvatarWrapper>

          <Info>
            <UserName to={`/${userName}`}>{userName}</UserName>

            <SubName>{subName}</SubName>
          </Info>
        </Heading>

        <StatusInfo>
          <StatusView label="publicações" quantity={posts} />

          <StatusView label="seguidores" quantity={followers} />

          <StatusView label="seguindo" quantity={flowing} />
        </StatusInfo>

        <RecentPosts items={recentPosts} />

        <PreviewActions />
      </InnerContainer>
    </Container>
  );
}
