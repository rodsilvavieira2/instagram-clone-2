import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 8px 16px;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  margin-right: 12px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

export const UserName = styled(Link)`
  font-size: 14px;
  font-weight: 600;

  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const SubName = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const Suggestion = styled.small`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const ButtonWrapper = styled.div`
  margin-left: 6px;
`;
