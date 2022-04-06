import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 8px 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  > * + * {
    margin-top: 9px;
  }

  margin-left: 12px;
`;
