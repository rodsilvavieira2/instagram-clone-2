import { useCallback, useState } from "react";

import { EmojiSelector } from "../../../post/post-comment-input/emoji-selector";
import { HeartInput } from "./heart-input";
import { ImageInput } from "./image-input";
import {
  Container,
  Input,
  InputWrapper,
  EmojiWrapper,
  SendButton,
} from "./styles";

export function InputMessage() {
  const [value, setValue] = useState("");

  const handleOnPick = useCallback((emoji: string) => {
    setValue((prev) => `${prev} ${emoji}`);
  }, []);

  return (
    <Container>
      <InputWrapper>
        <EmojiWrapper>
          <EmojiSelector onPick={handleOnPick} />
        </EmojiWrapper>

        <Input
          placeholder="Mensagem..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {value ? (
          <SendButton type="button">Enviar</SendButton>
        ) : (
          <>
            <ImageInput />

            <HeartInput />
          </>
        )}
      </InputWrapper>
    </Container>
  );
}
