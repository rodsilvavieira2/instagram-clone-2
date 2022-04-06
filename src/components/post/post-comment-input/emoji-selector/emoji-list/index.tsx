import { config, variants } from "./config";
import {
  Container,
  InnerContainer,
  CategoryTitle,
  CategorySection,
  EmojiPickButton,
  Arrow,
  Wrapper,
} from "./styles";

type EmojiListProps = {
  onPick: (emoji: string) => void;
};

export function EmojiList({ onPick }: EmojiListProps) {
  return (
    <Container>
      <Wrapper>
        <InnerContainer
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            opacity: {
              duration: "75ms",
            },
            transform: {
              duration: "38ms",
            },
          }}
        >
          {config.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i}>
              <CategoryTitle>{item.label}</CategoryTitle>

              <CategorySection>
                {item.items.map((emoji, j) => (
                  <EmojiPickButton
                    onClick={() => onPick(emoji)}
                    type="button"
                    // eslint-disable-next-line react/no-array-index-key
                    key={j}
                  >
                    {emoji}
                  </EmojiPickButton>
                ))}
              </CategorySection>
            </div>
          ))}
        </InnerContainer>

        <Arrow />
      </Wrapper>
    </Container>
  );
}
