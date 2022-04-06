import { Link } from "react-router-dom";
import styled from "styled-components";

import { BaseButton } from "../../buttons";

export const Container = styled.header`
  display: flex;

  margin-bottom: 44px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 292px;

  margin-right: 30px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

export const UserName = styled.h2`
  font-size: 28px;
  font-weight: 300;
  white-space: nowrap;
`;

export const EditProfileLinkButton = styled(Link)`
  font-size: 14px;
  font-weight: 600;

  text-decoration: none;
  color: inherit;

  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;

  padding: 5px 9px;

  cursor: pointer;

  margin-left: 20px;
`;

export const SettingsButton = styled(BaseButton)`
  padding: 8px;
  margin-left: 5px;
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
`;

export const SecondRow = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 40px;
  }
  margin-bottom: 20px;
`;

export const ProfileStatus = styled.p`
  font-size: 16px;
`;

export const ThirdRow = styled.div`
  display: flex;
  align-items: center;
`;

export const SubName = styled.strong`
  font-size: 16px;
  line-height: 24px;
`;
