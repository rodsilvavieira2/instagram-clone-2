import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const AvatarWrapper = styled.div`
  display: flex;

  margin-right: 18px;
  flex-shrink: 0;
`;

export const DescriptionWrapper = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const UserName = styled.strong`
  font-weight: 600;
  margin-right: 3px;
`;

export const Description = styled.p`
  display: inline;
`;
