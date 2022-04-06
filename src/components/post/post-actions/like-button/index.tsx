import { Variants } from "framer-motion";

import { InstagramHeart } from "../../../../icons";
import { Container, IconWrapper, HeartIcon } from "./styles";

const variants: Variants = {
  animate: (isLiked: boolean) => ({
    ...(isLiked && { scale: [1, 1.2, 0.95], transition: { duration: 0.45 } }),
  }),
};

type LikeButtonProps = {
  onToggleLike: () => void;
  isLiked: boolean;
};

export function LikeButton({ onToggleLike, isLiked }: LikeButtonProps) {
  return (
    <Container onClick={onToggleLike}>
      <IconWrapper custom={isLiked} variants={variants} animate="animate">
        {isLiked ? (
          <HeartIcon aria-label="Descurtir" />
        ) : (
          <InstagramHeart aria-label="Curtir" />
        )}
      </IconWrapper>
    </Container>
  );
}
