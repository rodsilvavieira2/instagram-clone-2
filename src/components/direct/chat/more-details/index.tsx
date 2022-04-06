import { DetailsUserInfo, DetailsUserInfoProps } from "./details-user-info";
import {
  MoreDetailsActions,
  MoreDetailsActionsProps,
} from "./more-details-actions";
import { SilencerMessage, SilencerMessageProps } from "./silencer-message";
import { Container } from "./styles";

export type MoreDetailsProps = MoreDetailsActionsProps &
  DetailsUserInfoProps &
  SilencerMessageProps;

export function MoreDetails({
  onBlock,
  onDeleteChat,
  onReport,
  avatarUrl,
  subName,
  userName,
  isChecked,
  onChangeCheck,
}: MoreDetailsProps) {
  return (
    <Container>
      <SilencerMessage isChecked={isChecked} onChangeCheck={onChangeCheck} />

      <DetailsUserInfo
        avatarUrl={avatarUrl}
        subName={subName}
        userName={userName}
      />

      <MoreDetailsActions
        onBlock={onBlock}
        onDeleteChat={onDeleteChat}
        onReport={onReport}
      />
    </Container>
  );
}
