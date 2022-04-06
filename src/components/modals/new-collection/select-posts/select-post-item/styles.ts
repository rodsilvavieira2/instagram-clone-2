import styled from "styled-components";

import { InstagramCheck } from "../../../../../icons";

export const Container = styled.div`
  position: relative;

  height: 128px;
  width: 128px;

  flex: 1 1 auto;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  inset: 0;

  opacity: 0.8;
`;

export const CheckIcon = styled(InstagramCheck)``;
