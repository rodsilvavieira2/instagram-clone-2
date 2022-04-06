import { Spinner } from "../../../../animations";
import { Container } from "./styles";

export function LoadingTab() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
