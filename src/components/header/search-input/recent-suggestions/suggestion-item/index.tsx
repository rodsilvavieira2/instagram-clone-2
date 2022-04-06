import { Suggestion } from "../../../../../@types";
import { preventClick } from "../../../../../util";
import { Avatar } from "../../../../avatar";
import {
  Container,
  InnerContainer,
  Info,
  NameAndFlowingStatus,
  UserName,
  RemoveButton,
  CloseIcon,
  StyledLink,
} from "./styles";

export type SuggestionItemProps = Suggestion & {
  onRemove: (id: string) => void;
  onClose: () => void;
};

export const SuggestionItem = ({
  avatarUrl,
  userName,
  id,
  onRemove,
  subName,
  isFollowing,
  onClose,
}: SuggestionItemProps) => {
  return (
    <StyledLink to={`/${userName}`} onClick={onClose}>
      <Container>
        <InnerContainer>
          <Avatar src={avatarUrl} alt={userName} />

          <Info>
            <UserName>{userName}</UserName>

            <NameAndFlowingStatus>
              {subName} {isFollowing ? "• Seguindo" : null}
            </NameAndFlowingStatus>
          </Info>

          <RemoveButton onClick={preventClick(() => onRemove(id))}>
            <CloseIcon />
          </RemoveButton>
        </InnerContainer>
      </Container>
    </StyledLink>
  );
};
