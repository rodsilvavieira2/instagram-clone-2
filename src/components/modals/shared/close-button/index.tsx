import { Container, CloseIcon } from "./styles";

type CloseButtonProps = {
  onClose?: () => void;
};

export function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <Container onClick={onClose}>
      <CloseIcon />
    </Container>
  );
}
