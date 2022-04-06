import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 160%;

  left: -29%;

  z-index: 3;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const InnerContainer = styled(motion.div)`
  padding: 8px;
  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 3px;

  overflow-x: hidden;
  overflow-y: auto;

  width: 295px;
  height: 309px;

  box-shadow: ${(props) => props.theme.boxShadow.base};
`;

export const CategoryTitle = styled.p`
  color: rgb(142, 142, 142);
  font-weight: 600;
  font-size: 14px;

  margin: 8px;

  text-align: left;
`;

export const CategorySection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    flex: 0 1 auto;
  }
`;

export const EmojiPickButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  appearance: none;
  background-color: transparent;
  border: 0;

  font-size: 25px;

  height: 25px;
  width: 25px;

  margin: 8px;

  cursor: pointer;

  &:active {
    opacity: 0.5;
  }
`;

export const Arrow = styled.div`
  position: absolute;

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.boxShadow.base};
  height: 14px;
  width: 14px;
  transform: rotate(45deg);

  top: 98%;
  left: 14px;

  z-index: -1;
`;
