import { Container, Dot } from "./styles";

type DotsNavProps = {
  currentSlide: number;
  quantity: number;
};

export function DotsNav({ currentSlide, quantity }: DotsNavProps) {
  return (
    <Container>
      {Array.from({ length: quantity }, (_, i) => (
        <Dot isActive={i + 1 === currentSlide} key={i} />
      ))}
    </Container>
  );
}
