import styled from "styled-components";

import { BaseButton } from "@components/buttons";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;

  line-height: 18px;
`;

export const DirectIcon = styled.span`
  background-image: url("/assets/secondary-icons.png");
  background-repeat: no-repeat;
  background-position: -196px -205px;
  height: 96px;
  width: 96px;
`;

export const Heading = styled.h2`
  font-size: 22px;
  font-weight: 300;

  margin-top: 16px;
`;

export const SubHeading = styled.h3`
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;

  color: ${(props) => props.theme.colors.text.secondary};
`;

export const SentMessage = styled(BaseButton)`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.highlight};
  font-weight: 600;

  padding: 5px 9px;

  margin-top: 24px;

  font-size: 14px;

  border-radius: 4px;
`;
