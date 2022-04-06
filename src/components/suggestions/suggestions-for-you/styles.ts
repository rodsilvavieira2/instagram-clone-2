import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const SeeALlSuggestions = styled(Link)`
  text-decoration: none;

  font-size: 12px;
  font-weight: 600;
  color: inherit;

  &:active {
    opacity: 0.6;
  }
`;

export const SuggestionsList = styled.ul`
  margin-top: 13px;
  list-style: none;
`;
