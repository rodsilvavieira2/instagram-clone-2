import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;

  text-decoration: none;

  height: 37px;

  padding: 8px 16px;
  white-space: nowrap;

  font-size: 14px;
  color: inherit;

  width: 100%;

  svg {
    margin-right: 12px;

    width: 16px;
    height: 16px;

    fill: ${(props) => props.theme.colors.text.primary};
    color: ${(props) => props.theme.colors.text.primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
