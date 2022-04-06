import styled from "styled-components";

import { BaseButton } from "../../buttons";

export const Container = styled.div`
  padding: 6px 16px;

  border-top: 1px solid ${(props) => props.theme.colors.border};
  position: relative;
`;

export const InnerContainer = styled.form`
  display: flex;
  align-items: center;
`;

export const MessageInput = styled.textarea`
  display: flex;
  align-items: center;

  resize: none;
  vertical-align: middle;

  max-height: 80px;

  font-family: inherit;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.secondary};
  outline: none;

  height: 18px;

  flex-grow: 1;
  border: 0;
  background-color: transparent;
  appearance: none;
`;

export const SubmitButton = styled(BaseButton)`
  color: ${(props) => props.theme.colors.highlight};

  font-size: 14px;
  font-weight: 600;

  flex-shrink: 0;

  &:disabled {
    opacity: 0.5;
  }
`;

export const EmojiSelectorWrapper = styled.div`
  padding: 8px 16px 8px 0;
`;
