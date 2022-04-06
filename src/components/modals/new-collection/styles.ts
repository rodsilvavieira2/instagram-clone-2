import { motion } from "framer-motion";
import styled from "styled-components";

import { InstagramClose } from "../../../icons";
import { BaseButton } from "../../buttons";

export const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.primary};

  overflow: hidden;
  border-radius: 12px;

  position: relative;
`;

export const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 600;

  height: 42px;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;

  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

export const Button = styled(BaseButton)`
  font-weight: 700;
  color: ${(props) => props.theme.colors.highlight};
  font-size: 14px;

  &:disabled {
    opacity: 0.6;
  }

  width: 100%;
  height: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;
`;

export const Input = styled.input`
  font-size: 14px;
  color: inherit;
  font-family: inherit;
  line-height: 30px;

  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 6px;

  padding: 4px 12px;

  width: 85%;

  &:focus {
    border-color: rgb(168, 168, 168);
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

export const CloseButton = styled(BaseButton)`
  position: absolute;
  padding: 8px;
  right: 8px;
  top: 2px;
`;

export const CloseIcon = styled(InstagramClose)`
  height: 18px;
  width: 18px;

  fill: ${(props) => props.theme.colors.icon};
  color: ${(props) => props.theme.colors.icon};
`;

export const ArrowLeftIcon = styled.div`
  background-image: url("/assets/icons.png");
  background-position: -524px -26px;
  background-repeat: no-repeat;

  height: 24px;
  width: 24px;
`;

export const ButtonBack = styled(BaseButton)`
  position: absolute;

  height: 40px;
  width: 40px;

  top: 0;
  left: 0;
`;
