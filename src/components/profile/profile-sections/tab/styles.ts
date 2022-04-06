import { Link } from "react-router-dom";
import styled from "styled-components";

type TabProps = {
  isActive: boolean;
};

export const Container = styled(Link)<TabProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 12px;
  font-weight: 600;

  text-transform: uppercase;
  text-decoration: none;

  border-top: 1px solid transparent;
  border-color: ${(props) =>
    props.isActive ? props.theme.colors.text.primary : "transparent"};

  color: ${(props) => {
    return props.isActive
      ? props.theme.colors.text.primary
      : props.theme.colors.text.secondary;
  }};

  > svg {
    margin-right: 6px;
  }
`;
