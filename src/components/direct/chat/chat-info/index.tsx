import { User } from "../../../../@types";
import { InstagramInfoFill, InstagramInfo } from "../../../../icons";
import { fromDate } from "../../../../util";
import { Avatar } from "../../../avatar";
import {
  Container,
  AvatarWrapper,
  Info,
  InnerContainer,
  OnlineBadger,
  Status,
  SubName,
  InfoButton,
  InfoWrapper,
  Details,
} from "./styles";

type ChatInfoProps = Pick<User, "avatarUrl" | "subName" | "userName"> & {
  lastOnline: Date;
  isOnline: boolean;
  isInInfoMode: boolean;
  onToggleMode: () => void;
};

export function ChatInfo({
  avatarUrl,
  subName,
  isOnline,
  lastOnline,
  isInInfoMode,
  onToggleMode,
}: ChatInfoProps) {
  return (
    <Container>
      <InnerContainer>
        {isInInfoMode ? (
          <Details>Detalhes</Details>
        ) : (
          <InfoWrapper>
            <AvatarWrapper>
              <Avatar src={avatarUrl} alt={subName} size="small" />

              {isOnline && <OnlineBadger />}
            </AvatarWrapper>

            <Info>
              <SubName>{subName}</SubName>

              <Status>
                {isOnline && "Online agora"}

                {!isOnline && `Online ${fromDate(lastOnline)}`}
              </Status>
            </Info>
          </InfoWrapper>
        )}

        <InfoButton onClick={onToggleMode}>
          {isInInfoMode ? <InstagramInfoFill /> : <InstagramInfo />}
        </InfoButton>
      </InnerContainer>
    </Container>
  );
}
