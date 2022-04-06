import { Link } from "react-router-dom";
import styled from "styled-components";

import { InstagramHorizontalMore } from "../../../icons";

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  padding-right: 8px;

  background-color: ${(props) => props.theme.colors.primary};

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const HeadUserInfo = styled.header`
  display: flex;
  align-items: center;

  flex: 1 1 auto;

  padding: 14px 4px 14px 16px;
`;

export const HeadUserInfoUserName = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.primary};

  padding: 8px 0;

  margin-left: 14px;

  &:active {
    opacity: 0.6;
  }
`;

export const MoreOptionsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background-color: transparent;
  appearance: none;

  padding: 8px;

  cursor: pointer;
`;

export const MoreIcon = styled(InstagramHorizontalMore)`
  flex-shrink: 0;
`;
