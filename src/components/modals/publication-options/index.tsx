import { useEffect } from "react";
import Modal from "react-modal";

import { ModalButton, scaleDownAnimation } from "../shared";
import styles from "./modal.module.css";
import { Container } from "./styles";

Modal.setAppElement("body");

type PublicationOptionsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function PublicationOptionsModal({
  isOpen,
  onClose,
}: PublicationOptionsModalProps) {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    }

    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Modal
      overlayClassName={styles.publicationOptionsModalOverlay}
      className={styles.publicationOptionsContainerModal}
      isOpen={isOpen}
      onRequestClose={onClose}
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
        <ModalButton variant="alert">Denunciar</ModalButton>

        <ModalButton variant="alert">Deixar de seguir</ModalButton>

        <ModalButton>Ir para a publicação</ModalButton>

        <ModalButton>Compartilhar em...</ModalButton>

        <ModalButton>Copiar link</ModalButton>

        <ModalButton>Incorporar</ModalButton>

        <ModalButton onClick={onClose}>Cancelar</ModalButton>
      </Container>
    </Modal>
  );
}
