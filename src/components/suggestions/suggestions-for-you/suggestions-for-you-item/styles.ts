import { BaseButton } from "components/buttons";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 6px 4px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 12px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 auto;

  line-height: 18px;

  min-width: 0;
  min-height: 0;
`;

export const UserName = styled(Link)`
  font-weight: 600;

  text-overflow: ellipsis;
  text-decoration: none;

  white-space: nowrap;
  overflow: hidden;

  color: inherit;

  &:active {
    opacity: 0.6;
  }
`;

export const SubName = styled.div`
  color: ${(props) => props.theme.colors.text.secondary};

  font-size: 12px;
  font-weight: 400;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  margin-left: 0.5rem;
`;

export const FlowButton = styled(BaseButton)`
  font-weight: 600;

  color: ${(props) => props.theme.colors.highlight};
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`;
