import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.primary};

  position: fixed;
  inset: 0;

  z-index: 999999;
`;
