import styled from "styled-components";

import { BaseButton } from "../../../buttons";

export const Container = styled.div``;

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 32px 16px;
`;

export const NewCollectionButton = styled(BaseButton)`
  color: ${(props) => props.theme.colors.highlight};
  font-size: 14px;
  font-weight: 600;
`;

export const AlertText = styled.small`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const SavedIcon = styled.div`
  background-image: url("/assets/icons.png");
  background-position: -192px -269px;
  height: 62px;
  width: 62px;
`;
