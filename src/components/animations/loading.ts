import styled, { css, keyframes } from "styled-components";

const skeleton = keyframes`
  0% {
    border-color: rgb(237, 242, 247);
    background: rgb(237, 242, 247);
  }
  100% {
    border-color: rgb(160, 174, 192);
    background: rgb(160, 174, 192);
  }  
`;

export const loadingSkeletonAnimation = css`
  animation: 0.8s linear 0s infinite alternate none running ${skeleton};
`;

export const Skeleton = styled.div`
  ${loadingSkeletonAnimation}
`;
