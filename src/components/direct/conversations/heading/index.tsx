import { InstagramEdit } from "@icons";

import { Container, UserName, Spacer, EditButton } from "./styles";

export function Heading() {
  return (
    <Container>
      <Spacer />

      <UserName>Rodrigo Silva</UserName>

      <EditButton>
        <InstagramEdit />
      </EditButton>
    </Container>
  );
}
