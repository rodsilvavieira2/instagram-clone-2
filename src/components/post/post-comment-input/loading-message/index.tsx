import { Spinner } from "../../../animations";
import { Container } from "./styles";

export function LoadingMessage() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
