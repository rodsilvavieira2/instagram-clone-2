import { Spinner } from "../../animations";
import { Container } from "./styles";

export function LazyFallBack() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
