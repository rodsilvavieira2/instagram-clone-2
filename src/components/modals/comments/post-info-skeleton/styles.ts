import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 4px 14px 16px;

  > * + * {
    margin-top: 10px;
  }
`;
