import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 8px 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  & > * + * {
    margin-top: 5px;
  }
`;
