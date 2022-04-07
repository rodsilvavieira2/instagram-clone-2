import { Spinner } from "../../../animations";
import { Container } from "./styles";

export function ConversationLoading() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
