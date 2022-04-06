import { User } from "../../@types";
import { Avatar } from "../avatar";
import { InfoSkeleton } from "./info-skeleton";
import {
  Container,
  Info,
  SubName,
  UserName,
  AvatarWrapper,
  Wrapper,
  ChangeButton,
} from "./styles";

type UserInfoProps = Partial<
  Pick<User, "userName" | "subName" | "avatarUrl">
> & {
  isLoading?: boolean;
};

export function UserInfo({
  avatarUrl,
  subName,
  userName,
  isLoading,
}: UserInfoProps) {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar src={avatarUrl} alt={userName} size="large" />
      </AvatarWrapper>

      {isLoading ? (
        <InfoSkeleton />
      ) : (
        <Info>
          <UserName to={`/${userName}`}>{userName}</UserName>

          <SubName>{subName}</SubName>
        </Info>
      )}

      <Wrapper>
        <ChangeButton>Mudar</ChangeButton>
      </Wrapper>
    </Container>
  );
}
