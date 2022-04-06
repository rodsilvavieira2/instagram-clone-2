import { ReactNode } from "react";

import { Container } from "./styles";

type PostLikesProps = {
  children: ReactNode;
};

export function PostLikes({ children }: PostLikesProps) {
  return <Container>{children} Curtidas</Container>;
}
