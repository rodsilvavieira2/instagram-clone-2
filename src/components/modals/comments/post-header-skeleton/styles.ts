import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 69px;

  padding: 14px 4px 14px 16px;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  margin-left: 14px;

  > * + * {
    margin-top: 10px;
  }
`;
