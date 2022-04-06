import styled from "styled-components";

import { InstagramGallery } from "../../icons";
import { loadingSkeletonAnimation } from "../animations";

type ContainerProps = {
  isLoading: boolean;
};

export const Container = styled.button`
  appearance: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const InnerContainer = styled.div<ContainerProps>`
  position: relative;
  height: 100%;
  width: 100%;

  .publication-status {
    opacity: 1;
  }

  ${(props) => {
    return props.isLoading ? loadingSkeletonAnimation : "";
  }}
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const GalleyIcon = styled(InstagramGallery)`
  position: absolute;
  top: 6px;
  right: 6px;
`;
