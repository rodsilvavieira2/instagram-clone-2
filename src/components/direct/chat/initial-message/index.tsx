import {
  Container,
  DirectIcon,
  Heading,
  SubHeading,
  SentMessage,
} from "./styles";

export function InitialChatMessage() {
  return (
    <Container>
      <DirectIcon />

      <Heading>Suas mensagens</Heading>

      <SubHeading>
        Envie fotos e mensagens privadas para um amigo ou grupo.
      </SubHeading>

      <SentMessage>Enviar mensagem</SentMessage>
    </Container>
  );
}
