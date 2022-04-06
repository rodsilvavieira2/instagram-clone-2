import { ReactNode } from "react";

import { Container, Heading, InnerContainer, Text } from "./styles";

type EmptyListProps = {
  icon: ReactNode;
  heading: string;
  text: string;
};

export function EmptyList({ heading, icon, text }: EmptyListProps) {
  return (
    <Container>
      <InnerContainer>
        {icon}

        <Heading>{heading}</Heading>

        <Text>{text}</Text>
      </InnerContainer>
    </Container>
  );
}
