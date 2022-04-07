import React, { HTMLAttributes } from "react";

import { Container } from "./styles";

type MenuButtonProps = HTMLAttributes<HTMLButtonElement>;

export function MenuButton({ children, ...props }: MenuButtonProps) {
  return <Container {...props}>{children}</Container>;
}
