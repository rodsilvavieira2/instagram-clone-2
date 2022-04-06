import { Container, Label } from "./styles";

export type SilencerMessageProps = {
  onChangeCheck: (status: boolean) => void;
  isChecked: boolean;
};

export function SilencerMessage({
  isChecked,
  onChangeCheck,
}: SilencerMessageProps) {
  return (
    <Container>
      <Label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChangeCheck(e.target.checked)}
        />
        Silenciar mensagens
      </Label>
    </Container>
  );
}
