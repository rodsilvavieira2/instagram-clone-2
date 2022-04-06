import {
  useCallback,
  useState,
  FormEvent,
  KeyboardEvent,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

import { EmojiSelector } from "./emoji-selector";
import { LoadingMessage } from "./loading-message";
import {
  Container,
  InnerContainer,
  MessageInput,
  SubmitButton,
  EmojiSelectorWrapper,
} from "./styles";

type FormData = {
  comment: string;
};

type PostCommentInputProps = {
  onComment: (data: FormData) => Promise<void>;
};

const Base: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  PostCommentInputProps
> = ({ onComment }, ref) => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onEmojiPick = useCallback((emoji: string) => {
    setValue((prev) => `${prev} ${emoji}`);
  }, []);

  async function handleOnComment() {
    if (value && !isLoading) {
      setIsLoading(true);
      await onComment({ comment: value });
      setValue("");
      setIsLoading(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    handleOnComment();
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      handleOnComment();
    }
  }

  return (
    <Container>
      <InnerContainer onSubmit={onSubmit} onKeyDown={onKeyDown}>
        <EmojiSelectorWrapper>
          <EmojiSelector onPick={onEmojiPick} />
        </EmojiSelectorWrapper>

        <MessageInput
          autoComplete="off"
          autoCorrect="off"
          placeholder="Adicione um comentário..."
          aria-label="Adicione um comentário..."
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          ref={ref}
        />

        <SubmitButton disabled={!value} type="submit" onClick={onSubmit}>
          Publicar
        </SubmitButton>
      </InnerContainer>

      {isLoading && <LoadingMessage />}
    </Container>
  );
};

export const PostCommentInput = forwardRef(Base);
