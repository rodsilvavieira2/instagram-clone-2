import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 350px;

  overflow: hidden;

  flex-shrink: 0;

  border-right: 1px solid ${(props) => props.theme.colors.border};
`;

export const ConversionsList = styled.ul`
  padding-top: 8px;
  list-style: none;

  overflow-y: auto;
`;
