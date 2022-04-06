import { Spinner } from "@components";

import { Container } from "./styles";

export function LazyFallBack() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
