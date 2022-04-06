import { ButtonHTMLAttributes } from "react";

import { Container, ContainerProps } from "./styles";

type ModalButtonProps = {
  children: React.ReactNode;
} & ContainerProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function ModalButton({ variant, children, ...props }: ModalButtonProps) {
  return (
    <Container variant={variant} {...props}>
      {children}
    </Container>
  );
}
