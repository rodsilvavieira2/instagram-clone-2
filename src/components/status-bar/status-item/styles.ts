import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 4px;

  position: relative;
`;

export const UserName = styled.small`
  max-width: 74px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 12px;
  font-weight: 400;

  margin-top: 8px;
`;
