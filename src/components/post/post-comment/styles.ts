import styled from "styled-components";

import { InstagramHorizontalMore } from "../../../icons";
import { BaseButton } from "../../buttons";

export const Container = styled.div`
  display: flex;

  &:hover {
    .more-options-button {
      opacity: 1;
    }
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  margin-right: 18px;
  align-items: flex-start;
`;

export const CommentWrapper = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const UserName = styled.strong`
  margin-right: 3px;
`;

export const PostedAt = styled.time`
  font-size: 12px;
  font-weight: 400;

  color: ${(props) => props.theme.colors.text.secondary};
`;

export const PostActions = styled.div`
  display: flex;
  align-items: center;

  margin-top: 16px;

  margin-bottom: 4px;

  > * + * {
    margin-left: 12px;
  }
`;

export const ResponseButton = styled(BaseButton)`
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;

  color: ${(props) => props.theme.colors.text.secondary};
  cursor: pointer;
`;

export const MoreOptionsButton = styled(BaseButton)`
  opacity: 0;

  &:focus {
    opacity: 1;
  }
`;

export const MoreHorizontalIcon = styled(InstagramHorizontalMore)`
  width: 24px;
  height: 24px;
  fill: ${(props) => props.theme.colors.text.secondary};
`;
