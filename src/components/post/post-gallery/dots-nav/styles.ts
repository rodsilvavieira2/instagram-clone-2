import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  z-index: 2;

  padding: 10px 0;

  > * + * {
    margin-left: 6px;
  }

  bottom: 0;
  left: 50%;
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
