import { FaComment } from "react-icons/fa";
import styled from "styled-components";

import { InstagramHeartFill } from "../../../icons";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;

  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const PublicationStatusInner = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 24px;
  }
`;

export const StatusItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;

  color: ${(props) => props.theme.colors.primary};

  svg {
    margin-right: 8px;
  }
`;

export const CommentsIcon = styled(FaComment)`
  fill: ${(props) => props.theme.colors.primary};
  height: 24px;
  width: 24px;
`;

export const LikesIcon = styled(InstagramHeartFill)`
  fill: ${(props) => props.theme.colors.primary};
`;
