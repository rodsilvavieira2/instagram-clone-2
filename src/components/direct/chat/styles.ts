import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 auto;

  height: 100%;
  min-height: 0;
  min-width: 0;

  overflow-x: hidden;
  overflow-y: auto;
`;

export const MessageList = styled.ul`
  list-style: none;
  padding: 16px;
  overflow-y: hidden;
`;
