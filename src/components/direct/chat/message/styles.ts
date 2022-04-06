import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 22px;

  min-height: 44px;

  margin-bottom: 8px;

  width: fit-content;
`;
