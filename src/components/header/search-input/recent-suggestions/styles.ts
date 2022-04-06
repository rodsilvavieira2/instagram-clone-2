import { motion } from "framer-motion";
import styled from "styled-components";

import { BaseButton } from "../../../buttons";

export const Container = styled.div`
  position: absolute;

  top: 132%;
  left: 50%;

  z-index: 999;
  transform: translateX(-50%);
`;

export const InnerContainer = styled(motion.div)`
  position: relative;

  background-color: ${(props) => props.theme.colors.primary};

  height: 362px;
  width: 375px;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 12px 0 0 0;
  border-radius: 6px;

  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.098);
`;

export const Arrow = styled.div`
  position: absolute;
  left: 50%;

  top: -6px;

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.098);
  z-index: 995;

  height: 19.98px;
  width: 19.98px;

  transform: translateX(-50%);
  transform: rotate(45deg);
`;

export const SuggestionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 4px 16px 0;
`;

export const Title = styled.h6`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  color: ${(props) => props.theme.colors.text.primary};
`;

export const ClearSuggestionButton = styled(BaseButton)`
  color: ${(props) => props.theme.colors.highlight};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-overflow: ellipsis;
`;

export const ListItems = styled.ul`
  list-style: none;
`;
