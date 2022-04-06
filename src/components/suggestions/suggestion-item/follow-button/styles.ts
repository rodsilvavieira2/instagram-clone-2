import styled, { css } from "styled-components";

import { LoadingIcon } from "../../../animations/spinner/styles";
import { BaseButton } from "../../../buttons";

type ContainerPros = {
  isFollowing: boolean;
};

const isFollowCss = css`
  color: inherit;
  background-color: transparent;
  border-color: ${(props) => props.theme.colors.border};
`;

const isNotFollowingCss = css`
  background-color: ${(props) => props.theme.colors.highlight};
  color: ${(props) => props.theme.colors.primary};
`;

export const Container = styled(BaseButton)<ContainerPros>`
  font-weight: 600;
  padding: 6px 9px;
  border: 1px solid transparent;

  border-radius: 6px;

  ${(props) => (props.isFollowing ? isFollowCss : isNotFollowingCss)}
`;

export const LoadingSpinner = styled(LoadingIcon)`
  height: 18px;
  width: 18px;

  fill: ${(props) => props.theme.colors.primary};
`;
