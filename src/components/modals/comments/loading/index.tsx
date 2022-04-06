import { Spinner } from "../../../animations";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
