import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 170%;

  transform: translateX(-80%);
`;

export const InnerContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 6px;

  overflow: hidden;

  box-shadow: ${(props) => props.theme.boxShadow.base};

  width: 230px;
`;

export const MenuDivider = styled.hr`
  border: 0px;

  height: 1px;

  background-color: ${(props) => props.theme.colors.border};
`;
