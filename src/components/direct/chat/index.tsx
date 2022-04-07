import { useState } from "react";

import { User } from "../../../@types";
import { ChatInfo } from "./chat-info";
import { InputMessage } from "./input-message";
import { Message, MessageProps } from "./message";
import { MoreDetails, MoreDetailsProps } from "./more-details";
import { Container, MessageList } from "./styles";

export function Chat() {
  const [isOnInfoMode, setIsOnInfoMode] = useState(false);

  function onToggledInfoMode() {
    setIsOnInfoMode((prev) => !prev);
  }

  return (
    <Container>
      <h1>chat</h1>
    </Container>
  );
}
