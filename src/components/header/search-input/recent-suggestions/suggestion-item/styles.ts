import { Link } from "react-router-dom";
import styled from "styled-components";

import { InstagramClose } from "../../../../../icons";
import { BaseButton } from "../../../../buttons";

export const Container = styled.div`
  padding: 8px 16px;

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 14px;

  flex: 1;
`;

export const UserName = styled.strong`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const NameAndFlowingStatus = styled.small`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 400;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 30ch;
`;

export const RemoveButton = styled(BaseButton)`
  padding: 8px;
`;

export const CloseIcon = styled(InstagramClose)``;

export const StyledLink = styled(Link)`
  display: block;

  text-decoration: none;
  width: 100%;
`;
