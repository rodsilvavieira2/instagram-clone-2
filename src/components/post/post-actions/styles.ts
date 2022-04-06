import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.primary};
  padding: 6px 16px 8px 16px;

  margin: 11px 0;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  appearance: none;
  border: 0;
  background-color: transparent;

  cursor: pointer;

  &:active {
    opacity: 0.5;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;

  & > button + button {
    margin-left: 1rem;
  }
`;

export const RightSection = styled.div``;
