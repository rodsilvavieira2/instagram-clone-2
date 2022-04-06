import styled from "styled-components";

import { BaseButton } from "@components/buttons";

export const Container = styled.div`
  padding: 20px;
`;

export const Input = styled.textarea`
  color: inherit;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  resize: none;

  outline: none;
  padding: 8px 9px;

  height: 34px;
  width: 100%;

  border: 1px solid transparent;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  min-height: 44px;
  padding-left: 11px;
  padding-right: 8px;

  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 22px;
`;

export const EmojiWrapper = styled.div`
  padding: 8px;
`;

export const SendButton = styled(BaseButton)`
  font-weight: 600;
  font-size: 14px;

  color: ${(props) => props.theme.colors.highlight};
  height: 42px;

  margin-right: 8px;
`;
