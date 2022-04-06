import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 16px 16px;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  width: fit-content;

  input {
    margin-right: 5px;
  }
`;
