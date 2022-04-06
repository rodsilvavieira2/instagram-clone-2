import { useState } from "react";

import { User } from "@types";

import { ChatInfo } from "./chat-info";
import { InputMessage } from "./input-message";
import { Message, MessageProps } from "./message";
import { MoreDetails, MoreDetailsProps } from "./more-details";
import { Container, MessageList } from "./styles";

type ChatProps = {
  items: MessageProps[];
} & Pick<User, "avatarUrl" | "subName"> &
  MoreDetailsProps & {
    lastOnline: Date;
  };

export function Chat({
  items,
  avatarUrl,
  subName,
  isChecked,
  onBlock,
  onChangeCheck,
  onDeleteChat,
  onReport,
  userName,
  lastOnline,
}: ChatProps) {
  const [isOnInfoMode, setIsOnInfoMode] = useState(false);

  function onToggledInfoMode() {
    setIsOnInfoMode((prev) => !prev);
  }

  return (
    <Container>
      <ChatInfo
        isOnline
        lastOnline={lastOnline}
        userName={userName}
        avatarUrl={avatarUrl}
        subName={subName}
        onToggleMode={onToggledInfoMode}
        isInInfoMode={isOnInfoMode}
      />

      {isOnInfoMode ? (
        <MoreDetails
          onBlock={onBlock}
          onDeleteChat={onDeleteChat}
          onReport={onReport}
          avatarUrl={avatarUrl}
          subName={subName}
          userName={userName}
          onChangeCheck={onChangeCheck}
          isChecked={isChecked}
        />
      ) : (
        <>
          <MessageList>
            {items.map((item) => (
              <li key={item.id}>
                <Message {...item} />
              </li>
            ))}
          </MessageList>
          <InputMessage />
        </>
      )}
    </Container>
  );
}
