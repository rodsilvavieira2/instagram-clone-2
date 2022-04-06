import { useState } from "react";

import { InstagramSaveFill, InstagramSave } from "../../../../icons";
import { Container } from "./styles";

export function SaveButton() {
  const [isSaved, setIsSaved] = useState(false);

  const onToggle = () => setIsSaved((prev) => !prev);

  return (
    <Container onClick={onToggle}>
      {isSaved ? <InstagramSaveFill /> : <InstagramSave />}
    </Container>
  );
}
