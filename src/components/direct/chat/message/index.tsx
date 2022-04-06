import { Container } from "./styles";

export type MessageProps = {
  id: string;
  message: string;
};

export function Message({ message, id }: MessageProps) {
  return <Container>{message}</Container>;
}
