import styled from "styled-components";

import { LoadingIcon } from "../../../../animations/spinner/styles";
import { BaseButton } from "../../../../buttons";

export const Container = styled(BaseButton)`
  font-weight: 600;

  color: ${(props) => props.theme.colors.highlight};
`;

export const LoadingSpinner = styled(LoadingIcon)`
  height: 18px;
  width: 18px;
`;

type TextProps = {
  isFollowing: boolean;
};

export const Text = styled.p<TextProps>`
  color: ${(props) =>
    props.isFollowing
      ? props.theme.colors.text.primary
      : props.theme.colors.highlight};
`;
