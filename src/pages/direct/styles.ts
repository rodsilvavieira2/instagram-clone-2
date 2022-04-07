import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const InnerContainer = styled.div`
  display: flex;

  width: 100%;
  height: calc(100vh - 100px);
  margin: 0 auto;
  max-width: 935px;

  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;

  background-color: ${(props) => props.theme.colors.primary};
`;
