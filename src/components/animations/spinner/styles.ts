import styled, { keyframes } from "styled-components";

import { InstagramLoading } from "../../../icons";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(InstagramLoading)`
  animation: ${rotate} 1.2s steps(12) infinite;
`;

export const Container = styled.div`
  height: 32px;
  width: 32px;
`;
