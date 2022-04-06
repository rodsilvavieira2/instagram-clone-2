import { User } from "../../../../@types";
import { Avatar } from "../../../avatar";
import { FollowButton } from "./follow-button";
import {
  Container,
  AvatarWrapper,
  UserName,
  SubName,
  Info,
  InnerContainer,
} from "./styles";

export type SuggestionForYouItemProps = Pick<
  User,
  "userName" | "avatarUrl" | "id"
> & {
  isFollowing: boolean;
  onToggleFollow: (id: string) => Promise<void>;
};

export function SuggestionForYouItem({
  avatarUrl,
  userName,
  isFollowing,
  onToggleFollow,
  id,
}: SuggestionForYouItemProps) {
  return (
    <Container>
      <InnerContainer>
        <AvatarWrapper>
          <Avatar src={avatarUrl} alt={userName} />
        </AvatarWrapper>

        <Info>
          <UserName to={`/${userName}`}>{userName}</UserName>

          <SubName>Sugestões para você</SubName>
        </Info>

        <FollowButton
          isFollowing={isFollowing}
          onToggleFollow={() => onToggleFollow(id)}
        />
      </InnerContainer>
    </Container>
  );
}
