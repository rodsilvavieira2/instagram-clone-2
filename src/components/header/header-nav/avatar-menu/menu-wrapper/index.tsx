import { useRef } from "react";

import { useOutsideClick } from "../../../../../hooks";
import {
  InstagramUserCircler,
  InstagramSave,
  InstagramSettings,
  InstagramRefresh,
} from "../../../../../icons";
import { variants } from "./config";
import { MenuButton } from "./menu-button";
import { MenuLinkButton } from "./menu-link-button";
import { Container, MenuDivider, InnerContainer } from "./styles";

type MenuWrapperProps = {
  onClose: () => void;
  userName: string;
};

export function MenuWrapper({ onClose, userName }: MenuWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: containerRef,
    handler: onClose,
  });

  return (
    <Container ref={containerRef}>
      <InnerContainer
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <MenuLinkButton to={`/${userName}`}>
          <InstagramUserCircler />
          Perfil
        </MenuLinkButton>

        <MenuLinkButton to={`/${userName}/saved`}>
          <InstagramSave /> Salvos
        </MenuLinkButton>

        <MenuButton>
          <InstagramSettings /> Configurações
        </MenuButton>

        <MenuButton>
          <InstagramRefresh /> Trocar de conta
        </MenuButton>

        <MenuDivider />

        <MenuButton>Sair</MenuButton>
      </InnerContainer>
    </Container>
  );
}
