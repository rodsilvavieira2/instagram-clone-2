import { useState } from "react";

import { User } from "../../../@types";
import { Avatar } from "../../avatar";
import { Container, UserName } from "./styles";

export type StatusItemProps = Pick<User, "avatarUrl" | "userName">;

export function StatusItem({ avatarUrl, userName }: StatusItemProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      <Avatar
        src={avatarUrl}
        alt={userName}
        size="large"
        onLoad={() => setIsLoading(false)}
      />

      {!isLoading && <UserName>{userName}</UserName>}
    </Container>
  );
}
