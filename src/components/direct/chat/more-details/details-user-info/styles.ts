import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const InnerContainer = styled.div`
  margin: 16px 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 8px 16px;
`;

export const Heading = styled.h4`
  font-weight: 600;
  font-size: 16px;

  margin: 8px 0;

  padding: 0 16px;
`;

export const UserName = styled.strong``;

export const SubName = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const Info = styled.div`
  margin-left: 12px;
`;
