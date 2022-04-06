import styled from "styled-components";

import { AvatarSize } from ".";
import { loadingSkeletonAnimation } from "../animations";

const avatarSize = {
  small: "24px",
  medium: "32px",
  large: "56px",
  "x-large": "150px",
};

type ContainerProps = {
  isLoading: boolean;
  size: AvatarSize;
};

export const Container = styled.span<ContainerProps>`
  display: flex;
  border-radius: 50%;
  overflow: hidden;

  ${(props) => (props.isLoading ? loadingSkeletonAnimation : "")}

  height: ${(props) => avatarSize[props.size]};
  width: ${(props) => avatarSize[props.size]};
`;

export const Image = styled.img`
  height: auto;
  width: 100%;

  object-fit: cover;
`;
