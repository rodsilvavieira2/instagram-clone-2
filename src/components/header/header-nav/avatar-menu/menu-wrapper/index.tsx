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
import { Container, MenuDivider, InnerContainer } from "./styles";

type MenuWrapperProps = {
  onClose: () => void;
};

export function MenuWrapper({ onClose }: MenuWrapperProps) {
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
        <MenuButton icon={<InstagramUserCircler />}>Perfil</MenuButton>

        <MenuButton icon={<InstagramSave />}>Salvos</MenuButton>

        <MenuButton icon={<InstagramSettings />}>Configurações</MenuButton>

        <MenuButton icon={<InstagramRefresh />}>Trocar de conta</MenuButton>

        <MenuDivider />

        <MenuButton>Sair</MenuButton>
      </InnerContainer>
    </Container>
  );
}
