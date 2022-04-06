import { User } from "../../../../@types";
import { fromDate } from "../../../../util";
import { Avatar } from "../../../avatar";
import {
  Container,
  SubName,
  Info,
  InnerContainer,
  Status,
  OnlineBadger,
  AvatarWrapper,
} from "./styles";

export type ConversationItemProps = Pick<
  User,
  "avatarUrl" | "subName" | "id"
> & {
  lastOnline: Date;
  isOnline: boolean;
  isActive: boolean;
  path: string;
};

export function ConversationItem({
  avatarUrl,
  isOnline,
  lastOnline,
  isActive,
  path,
  subName,
}: ConversationItemProps) {
  return (
    <Container isActive={isActive}>
      <InnerContainer to={path}>
        <AvatarWrapper>
          <Avatar src={avatarUrl} alt={subName} size="large" />

          {isOnline && <OnlineBadger />}
        </AvatarWrapper>

        <Info>
          <SubName>{subName}</SubName>

          <Status>
            {isOnline && "Online agora"}

            {!isOnline && `Online ${fromDate(lastOnline)}`}
          </Status>
        </Info>
      </InnerContainer>
    </Container>
  );
}
