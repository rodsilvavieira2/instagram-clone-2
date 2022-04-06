import React, { HTMLAttributes } from "react";

import { Container } from "./styles";

type MenuButtonProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
};

export function MenuButton({ children, icon, ...props }: MenuButtonProps) {
  return (
    <Container {...props}>
      {icon} {children}
    </Container>
  );
}
