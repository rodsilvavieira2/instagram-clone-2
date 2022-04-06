import styled from "styled-components";

import { InstagramCam } from "../../../../../../icons";
import { loadingSkeletonAnimation } from "../../../../../animations";

type ContainerProps = {
  isLoading: boolean;
  isError: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 130px;
  width: 130px;

  ${(props) => (props.isLoading ? loadingSkeletonAnimation : "")}

  background-color: ${(props) =>
    props.isError ? props.theme.colors.fallBack : "transparent"};

  &:hover {
    opacity: 0.6;
  }
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const ErrorIcon = styled(InstagramCam)`
  width: 35%;
  height: auto;

  fill: ${(props) => props.theme.colors.primary};
`;
