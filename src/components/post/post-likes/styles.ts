import styled from "styled-components";

export const Container = styled.strong`
  font-size: 14px;
  font-weight: 600;

  color: ${(props) => props.theme.colors.text.primary};

  padding: 0 16px;

  margin-bottom: 8px;
`;
