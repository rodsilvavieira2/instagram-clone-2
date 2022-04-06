import { Container, Label, Quantity } from "./styles";

type StatusViewProps = {
  quantity: number;
  label: string;
};

export function StatusView({ label, quantity }: StatusViewProps) {
  return (
    <Container>
      <Quantity>{quantity}</Quantity>

      <Label>{label}</Label>
    </Container>
  );
}
