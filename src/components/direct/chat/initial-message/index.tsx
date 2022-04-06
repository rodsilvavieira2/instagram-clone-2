import {
  Container,
  DirectIcon,
  Heading,
  SubHeading,
  SentMessage,
} from "./styles";

type InitialMessageProps = {
  onSetMessage: () => void;
};

export function InitialMessage({ onSetMessage }: InitialMessageProps) {
  return (
    <Container>
      <DirectIcon />

      <Heading>Suas mensagens</Heading>

      <SubHeading>
        Envie fotos e mensagens privadas para um amigo ou grupo.
      </SubHeading>

      <SentMessage onClick={onSetMessage}>Enviar mensagem</SentMessage>
    </Container>
  );
}
