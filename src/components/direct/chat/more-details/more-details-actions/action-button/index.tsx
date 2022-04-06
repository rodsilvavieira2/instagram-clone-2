import styled from "styled-components";

import { BaseButton } from "../../../../../buttons";

export const ActionButton = styled(BaseButton)`
  justify-content: flex-start;

  margin: 16px;
  font-size: 14px;
  font-weight: 400;

  color: ${(props) => props.theme.colors.error};

  text-align: left;
`;
