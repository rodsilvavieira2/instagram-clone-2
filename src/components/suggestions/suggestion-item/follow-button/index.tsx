/* eslint-disable no-nested-ternary */
import { useState } from "react";

import { Container, LoadingSpinner } from "./styles";

type FollowButtonProps = {
  isFollowing: boolean;
  onFollow: () => Promise<void>;
};

export function FollowButton({ isFollowing, onFollow }: FollowButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnFollowing = async () => {
    setIsLoading(true);

    await onFollow();

    setIsLoading(false);
  };

  return (
    <Container isFollowing={isFollowing} onClick={handleOnFollowing}>
      {isLoading ? <LoadingSpinner /> : isFollowing ? "Seguindo" : "Seguir"}
    </Container>
  );
}
