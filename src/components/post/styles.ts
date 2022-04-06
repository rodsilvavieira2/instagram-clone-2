import styled from "styled-components";

import { BaseButton } from "@components/buttons";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const CommentsCount = styled(BaseButton)`
  padding: 0 16px;
  margin-bottom: 8px;
  margin-right: auto;

  font-size: 14px;
  color: ${(props) => props.theme.colors.text.secondary};
`;
