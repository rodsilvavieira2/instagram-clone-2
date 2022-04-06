import { ActionButton } from "./action-button";
import { Container } from "./styles";

export type MoreDetailsActionsProps = {
  onBlock: () => void;
  onDeleteChat: () => void;
  onReport: () => void;
};

export function MoreDetailsActions({
  onBlock,
  onDeleteChat,
  onReport,
}: MoreDetailsActionsProps) {
  return (
    <Container>
      <ActionButton onClick={onBlock}>Excluir bate-papo</ActionButton>

      <ActionButton onClick={onDeleteChat}>Bloquear</ActionButton>

      <ActionButton onClick={onReport}>Denunciar</ActionButton>
    </Container>
  );
}
