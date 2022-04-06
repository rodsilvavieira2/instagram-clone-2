import { User } from "../../../../../@types";
import { Avatar } from "../../../../avatar";
import {
  Container,
  InfoWrapper,
  Heading,
  Info,
  SubName,
  UserName,
  InnerContainer,
} from "./styles";

export type DetailsUserInfoProps = Pick<
  User,
  "avatarUrl" | "subName" | "userName"
>;

export function DetailsUserInfo({
  avatarUrl,
  subName,
  userName,
}: DetailsUserInfoProps) {
  return (
    <Container>
      <InnerContainer>
        <Heading>Nembros</Heading>

        <InfoWrapper>
          <Avatar size="large" src={avatarUrl} alt={subName} />

          <Info>
            <UserName>{userName}</UserName>

            <SubName>{subName}</SubName>
          </Info>
        </InfoWrapper>
      </InnerContainer>
    </Container>
  );
}
