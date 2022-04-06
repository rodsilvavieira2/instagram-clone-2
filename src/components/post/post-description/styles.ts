import { Link } from "react-router-dom";
import styled from "styled-components";

import { BaseButton } from "../../buttons";

export const Container = styled.div`
  padding: 0 16px;

  margin-bottom: 8px;
`;

export const InnerContainer = styled.div``;

export const UserName = styled(Link)`
  text-decoration: none;
  color: inherit;

  font-weight: 600;

  margin-right: 3px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  display: inline;
`;

export const ShowMore = styled(BaseButton)`
  display: inline;
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 14px;
`;
