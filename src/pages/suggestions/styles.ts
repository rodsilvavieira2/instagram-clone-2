import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  padding: 60px 0;

  margin: 0 auto;
`;

export const Heading = styled.h4`
  font-size: 16px;
  font-weight: 600;

  margin: 16px 12px 12px;
`;

export const SuggestionsList = styled.ul`
  padding: 8px 0;

  list-style: none;

  background-color: ${(props) => props.theme.colors.primary};
`;
