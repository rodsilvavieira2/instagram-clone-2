import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};

  padding: 15px 0;
  margin-bottom: 24px;

  border-radius: 3px;

  border: 1px solid ${(props) => props.theme.colors.border};

  overflow: hidden;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;

  height: 85px;
  overflow: hidden;

  padding-left: 1rem;
`;
