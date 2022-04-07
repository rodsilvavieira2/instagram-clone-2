import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { User } from "../../../../@types";
import { Avatar } from "../../../avatar";
import { MenuWrapper } from "./menu-wrapper";
import { Container, MenuButton } from "./styles";

type AvatarMenuProps = Pick<User, "avatarUrl" | "subName" | "userName">;

export function AvatarMenu({ avatarUrl, subName, userName }: AvatarMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <Container>
      <MenuButton onClick={onToggle}>
        <Avatar
          src={avatarUrl}
          alt={subName}
          style={{
            height: "24px",
            width: "24px",
          }}
        />
      </MenuButton>

      <AnimatePresence>
        {isOpen && <MenuWrapper onClose={onToggle} userName={userName} />}
      </AnimatePresence>
    </Container>
  );
}
