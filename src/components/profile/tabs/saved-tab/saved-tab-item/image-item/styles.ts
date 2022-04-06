import styled from "styled-components";

import { InstagramCam } from "../../../../../../icons";
import { loadingSkeletonAnimation } from "../../../../../animations";

type ContainerProps = {
  isLoading: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 147px;
  width: 147px;

  ${(props) => {
    return props.isLoading ? loadingSkeletonAnimation : "";
  }}
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  background-color: ${(props) => props.theme.colors.fallBack};
`;

export const CamIcon = styled(InstagramCam)`
  fill: ${(props) => props.theme.colors.primary};

  height: auto;
  width: 35%;
`;
