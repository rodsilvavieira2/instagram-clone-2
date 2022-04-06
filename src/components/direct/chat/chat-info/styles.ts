import styled from "styled-components";

import { BaseButton } from "@components/buttons";

export const Container = styled.div``;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 20px;
  height: 60px;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const SubName = styled.p``;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 18px;
`;

export const Status = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const OnlineBadger = styled.span`
  position: absolute;

  width: 20px;
  height: 20px;

  border: 3.5px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;

  background-color: #78de45;

  left: 64%;
  top: 68%;
`;

export const InfoButton = styled(BaseButton)``;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Details = styled.p`
  text-align: center;

  font-weight: 600;
  font-size: 16px;
  padding: 8px 20px;

  flex: 1;
`;
