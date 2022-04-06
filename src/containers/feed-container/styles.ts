import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  padding-bottom: 60px;

  > li + li {
    margin-top: 24px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 0;
`;
