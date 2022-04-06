import { useState } from "react";

import { Container, LoadingSpinner, Text } from "./styles";

type FollowButtonProps = {
  isFollowing: boolean;
  onToggleFollow: () => Promise<void>;
};

export function FollowButton({
  isFollowing,
  onToggleFollow,
}: FollowButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleToggleFollow() {
    setIsLoading(true);

    await onToggleFollow();

    setIsLoading(false);
  }

  return (
    <Container onClick={handleToggleFollow}>
      {isLoading && <LoadingSpinner />}

      {!isLoading && (
        <Text isFollowing={isFollowing}>
          {isFollowing ? "Seguindo" : "Seguir"}
        </Text>
      )}
    </Container>
  );
}
