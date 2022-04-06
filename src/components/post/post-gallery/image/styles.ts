import styled, { css } from "styled-components";

import { InstagramCam } from "../../../../icons";
import { loadingSkeletonAnimation } from "../../../animations";

type ContainerProps = {
  isLoading: boolean;
  isError: boolean;
};

const errorCss = css`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 480px;

  background-color: ${(props) => props.theme.colors.fallBack};
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${(props) => {
    return props.isLoading ? "480px" : "100%";
  }};

  > img {
    height: 100%;
    width: 100%;

    object-fit: cover;
    user-select: none;
    pointer-events: none;
  }

  ${(props) =>
    props.isLoading && !props.isError ? loadingSkeletonAnimation : ""}

  ${(props) => (props.isError ? errorCss : "")}
`;

export const ErrorIcon = styled(InstagramCam)`
  width: 35%;
  height: auto;

  fill: ${(props) => props.theme.colors.primary};
`;
