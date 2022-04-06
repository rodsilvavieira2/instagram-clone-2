import { Link } from "react-router-dom";
import styled from "styled-components";

import { BaseButton } from "../buttons";

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 22px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;

  flex: 1 1 auto;

  min-height: 0;
  min-width: 0;
`;

export const UserName = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: 600;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:active {
    opacity: 0.6;
  }
`;

export const SubName = styled.small`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 400;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 16px;
`;

export const ChangeButton = styled(BaseButton)`
  text-transform: capitalize;

  font-weight: 600;
  color: ${(props) => props.theme.colors.highlight};

  margin-left: 0.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
