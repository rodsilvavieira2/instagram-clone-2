import { InstagramComment, InstagramShare } from "../../../icons";
import { LikeButton } from "./like-button";
import { SaveButton } from "./save-button";
import { ActionButton, Container, LeftSection, RightSection } from "./styles";

type ActionsProps = {
  onOpenComments: () => void;
  onToggleLike: () => void;
  isLiked: boolean;
};

export function PostActions({
  onOpenComments,
  isLiked,
  onToggleLike,
}: ActionsProps) {
  return (
    <Container>
      <LeftSection>
        <LikeButton isLiked={isLiked} onToggleLike={onToggleLike} />

        <ActionButton onClick={onOpenComments}>
          <InstagramComment />
        </ActionButton>

        <ActionButton>
          <InstagramShare />
        </ActionButton>
      </LeftSection>

      <RightSection>
        <SaveButton />
      </RightSection>
    </Container>
  );
}
