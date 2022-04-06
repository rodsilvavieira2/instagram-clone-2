import { Container } from "./styles";

type ProfileStatusProps = {
  quantity: number;
  label: string;
};

export function ProfileStatus({ label, quantity }: ProfileStatusProps) {
  return (
    <Container>
      <strong>{quantity}</strong> {label}
    </Container>
  );
}
