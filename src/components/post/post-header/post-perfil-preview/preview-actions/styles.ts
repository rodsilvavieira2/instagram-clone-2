import styled from "styled-components";

import { BaseButton } from "../../../../buttons";

export const Container = styled.div`
  display: flex;

  padding: 16px;

  > * + * {
    margin-left: 8px;
  }
`;

export const Button = styled(BaseButton)`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 6px;

  font-weight: 600;
  font-size: 14px;

  padding: 5px 9px;

  flex-grow: 1;
`;
