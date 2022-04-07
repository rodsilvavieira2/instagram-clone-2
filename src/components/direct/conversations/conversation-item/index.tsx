import { forwardRef, ForwardRefRenderFunction } from "react";
import { useParams } from "react-router-dom";

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
  path: string;
};

type ConversationItemParams = {
  chatID: string;
};

const Base: ForwardRefRenderFunction<HTMLDivElement, ConversationItemProps> = (
  { id, avatarUrl, isOnline, lastOnline, path, subName },
  ref
) => {
  const { chatID } = useParams<ConversationItemParams>();

  const isActive = chatID === id;

  return (
    <Container isActive={isActive} ref={ref}>
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
};

export const ConversationItem = forwardRef(Base);
