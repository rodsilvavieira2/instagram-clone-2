import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 18px;
`;

export const Quantity = styled.strong``;

export const Label = styled.p`
  color: ${(props) => props.theme.colors.secondary};
`;
