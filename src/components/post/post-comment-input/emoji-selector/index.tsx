import { AnimatePresence } from "framer-motion";
import { memo, useState } from "react";

import { InstagramHappyFace } from "../../../../icons";
import { EmojiList } from "./emoji-list";
import { EmojiButton, Container } from "./styles";

type EmojiSelectorProps = {
  onPick: (emoji: string) => void;
};

function Base({ onPick }: EmojiSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen((prev) => !prev);

  return (
    <Container>
      <EmojiButton type="button" onClick={onToggle}>
        <InstagramHappyFace />
      </EmojiButton>

      <AnimatePresence>
        {isOpen && <EmojiList onPick={onPick} />}
      </AnimatePresence>
    </Container>
  );
}

export const EmojiSelector = memo(Base);
