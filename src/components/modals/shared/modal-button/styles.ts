import styled from "styled-components";

export type ContainerProps = {
  variant?: "alert" | "normal";
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  appearance: none;

  font-size: 14px;
  line-height: 1.5;
  font-weight: ${(props) => {
    if (props.variant === "alert") return "600";

    return "400";
  }};

  background-color: ${(props) => props.theme.colors.primary};
  min-height: 48px;

  border: 0;

  border-top: 1px solid ${(props) => props.theme.colors.border};

  padding: 4px 8px;
  user-select: none;

  width: 100%;

  cursor: pointer;

  color: ${(props) => {
    if (props.variant === "alert") return props.theme.colors.brand;

    return props.theme.colors.text.primary;
  }};

  &:active {
    background-color: ${(props) => props.theme.colors.shape};
  }
`;
