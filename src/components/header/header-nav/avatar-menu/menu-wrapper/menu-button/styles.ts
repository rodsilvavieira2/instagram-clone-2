import styled from "styled-components";

import { BaseButton } from "../../../../../buttons";

export const Container = styled(BaseButton)`
  height: 37px;

  padding: 8px 16px;
  white-space: nowrap;

  justify-content: start;

  font-size: 14px;

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
