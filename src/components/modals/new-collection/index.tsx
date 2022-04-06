import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import Modal from "react-modal";

import faker from "@faker-js/faker";

import { SelectPosts } from "./select-posts";
import {
  Container,
  Header,
  Button,
  Footer,
  Input,
  InputWrapper,
  CloseButton,
  CloseIcon,
  ButtonBack,
} from "./styles";
import styles from "./styles.module.css";

Modal.setAppElement("body");

const items = Array.from({ length: 10 }).map(() => ({
  id: faker.datatype.uuid(),
  alt: faker.lorem.words(2),
  url: faker.image.transport(undefined, undefined, true),
}));

type NewCollectionProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function NewCollectionModal({ isOpen, onClose }: NewCollectionProps) {
  const [value, setValue] = useState("");
  const [isOnNextStep, setIsOnNextStep] = useState(false);

  const toggleNextStep = () => setIsOnNextStep((prev) => !prev);

  return (
    <Modal
      className={styles.newCollectionModalContainer}
      overlayClassName={styles.newCollectionModalOverlay}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <Container>
        <Header>{isOnNextStep ? "Adicionar de salvos" : "Nova coleção"}</Header>

        <CloseButton aria-label="fechar" onClick={onClose}>
          <CloseIcon />
        </CloseButton>

        {isOnNextStep && (
          <ButtonBack aria-label="voltar" onClick={toggleNextStep}>
            <MdArrowBackIos fontSize="1.1rem" />
          </ButtonBack>
        )}

        {isOnNextStep ? (
          <SelectPosts items={items} />
        ) : (
          <InputWrapper>
            <Input
              autoComplete="off"
              spellCheck
              placeholder="Nome da coleção"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </InputWrapper>
        )}

        <Footer>
          {isOnNextStep ? (
            <Button key={1}>Concluir</Button>
          ) : (
            <Button key={2} onClick={toggleNextStep} disabled={!value}>
              Avançar
            </Button>
          )}
        </Footer>
      </Container>
    </Modal>
  );
}
