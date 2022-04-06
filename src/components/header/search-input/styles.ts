import { RiSearchLine } from "react-icons/ri";
import styled from "styled-components";

export const SearchIcon = styled(RiSearchLine)`
  color: ${(props) => props.theme.colors.text.secondary};
  margin-right: 0.5rem;

  flex-shrink: 0;
`;

export const Container = styled.label`
  display: flex;
  align-items: center;

  position: relative;

  height: 36px;
  width: 268px;
  min-width: 125px;

  flex: 0 1 auto;

  background-color: ${(props) => props.theme.colors.shape};
  border-radius: 8px;

  padding: 3px 16px;
`;

export const Input = styled.input`
  color: ${(props) => props.theme.colors.text.secondary};

  background-color: transparent;
  outline: none;

  border: 0;

  appearance: none;
  font-size: 16px;
  line-height: 18px;

  width: 100%;
`;

export const ClearButton = styled.button`
  height: 14px;
  width: 14px;

  border-radius: 20px;

  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 9px;

  border: 0;

  flex-shrink: 0;

  cursor: pointer;
`;
