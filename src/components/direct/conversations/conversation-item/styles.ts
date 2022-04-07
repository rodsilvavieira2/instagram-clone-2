import { Link } from "react-router-dom";
import styled from "styled-components";

type ContainerProps = {
  isActive: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => {
    return props.isActive ? props.theme.colors.shape : "transparent";
  }};

  &:hover {
    background-color: ${(props) => {
      return props.isActive
        ? props.theme.colors.shape
        : props.theme.colors.background;
    }};
  }

  cursor: ${(props) => {
    return props.isActive ? "grab" : "pointer";
  }};
`;

export const InnerContainer = styled(Link)`
  display: flex;
  align-items: center;

  color: inherit;
  text-decoration: none;
  padding: 8px 20px;
`;

export const SubName = styled.p``;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 12px;
`;

export const Status = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const OnlineBadger = styled.span`
  position: absolute;

  width: 20px;
  height: 20px;

  border: 3.5px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;

  background-color: #78de45;

  left: 64%;
  top: 68%;
`;
