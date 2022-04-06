import { Suggestion as SuggestionType } from "../../../@types";
import { Avatar } from "../../avatar";
import { FollowButton } from "./follow-button";
import {
  Container,
  AvatarWrapper,
  Info,
  UserName,
  SubName,
  Suggestion,
  ButtonWrapper,
} from "./styles";

type SuggestionItemProps = Pick<
  SuggestionType,
  "avatarUrl" | "userName" | "subName" | "isFollowing" | "id"
> & {
  onFollow: (id: string) => Promise<void>;
};

export function SuggestionItem({
  avatarUrl,
  subName,
  userName,
  onFollow,
  isFollowing,
  id,
}: SuggestionItemProps) {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar size="large" src={avatarUrl} alt={userName} />
      </AvatarWrapper>

      <Info>
        <UserName to={`/${userName}`}>{userName}</UserName>

        <SubName>{subName}</SubName>

        <Suggestion>Sugestões para você</Suggestion>
      </Info>

      <ButtonWrapper>
        <FollowButton isFollowing={isFollowing} onFollow={() => onFollow(id)} />
      </ButtonWrapper>
    </Container>
  );
}
