import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: 600;
`;
