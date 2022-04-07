import { Outlet } from "react-router-dom";

import { ConversationsContainer } from "../../containers";
import { Container, InnerContainer } from "./styles";

export default function Direct() {
  return (
    <Container>
      <InnerContainer>
        <ConversationsContainer />

        <Outlet />
      </InnerContainer>
    </Container>
  );
}
