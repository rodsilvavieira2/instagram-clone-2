import Modal from "react-modal";

import { ModalButton, scaleDownAnimation } from "../shared";
import { Container } from "./styles";
import styles from "./styles.module.css";

Modal.setAppElement("body");

type ProfileSettingsProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ProfileSettingsModal({
  isOpen,
  onClose,
}: ProfileSettingsProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.profileSettingsContainerModal}
      overlayClassName={styles.profileSettingsModalOverlay}
    >
      <Container
        variants={scaleDownAnimation}
        initial="initial"
        animate="animate"
        transition={{
          damping: 0,
          stiffness: 0,
          duration: 0.1,
        }}
      >
        <ModalButton>Alterar senha</ModalButton>

        <ModalButton>QR Code</ModalButton>

        <ModalButton>Aplicativo e sites</ModalButton>

        <ModalButton>Notificações</ModalButton>

        <ModalButton>Privacidade e segurança</ModalButton>

        <ModalButton>Atividade de login</ModalButton>

        <ModalButton>Emails do instaggram</ModalButton>

        <ModalButton>Ralatar um problema</ModalButton>

        <ModalButton>Sair</ModalButton>

        <ModalButton onClick={onClose}>Cancelar</ModalButton>
      </Container>
    </Modal>
  );
}
