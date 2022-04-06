import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { User } from "../../../../@types";
import { Avatar } from "../../../avatar";
import { MenuWrapper } from "./menu-wrapper";
import { Container, MenuButton } from "./styles";

type AvatarMenuProps = Pick<User, "avatarUrl" | "subName">;

export function AvatarMenu({ avatarUrl, subName }: AvatarMenuProps) {
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
        {isOpen && <MenuWrapper onClose={onToggle} />}
      </AnimatePresence>
    </Container>
  );
}
