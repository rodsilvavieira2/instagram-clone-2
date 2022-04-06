import styled from "styled-components";

import { BaseButton } from "@components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  position: relative;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const InnerContainer = styled.ul`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  list-style: none;

  transition: all 0.3s ease-in-out;

  > li {
    flex: 1 0 100%;
    height: 100%;
  }
`;

export const NextSlideButton = styled(BaseButton)`
  position: absolute;

  padding: 16px 8px;

  right: 2px;

  top: 50%;
  transform: translateY(-50%);
`;

export const PrevSlideButton = styled(BaseButton)`
  position: absolute;

  padding: 16px 8px;

  left: 2px;

  top: 50%;
  transform: translateY(-50%);
`;

export const RightIconDiv = styled.div`
  background-image: url("/assets/icons.png");
  background-repeat: no-repeat;
  background-position: -162px -98px;

  height: 30px;
  width: 30px;
`;

export const LeftIconDiv = styled.div`
  background-image: url("/assets/icons.png");
  background-repeat: no-repeat;
  background-position: -130px -98px;

  height: 30px;
  width: 30px;
`;

export const DotsNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 10px;

  > * + * {
    margin-left: 6px;
  }
`;

type DotProps = {
  isActive: boolean;
};

export const Dot = styled.div<DotProps>`
  height: 6px;
  width: 6px;

  border-radius: 6px;

  background-color: ${(props) => {
    return props.isActive ? props.theme.colors.highlight : "#a8a8a8";
  }};
`;
