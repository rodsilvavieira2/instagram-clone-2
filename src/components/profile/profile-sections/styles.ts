import styled from "styled-components";

import { InstagramGrid, InstagramSave, InstagramUser } from "../../../icons";
import { BaseButton } from "../../buttons";

export const Container = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

export const TabList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 53px;

  > * + * {
    margin-left: 60px;
    margin-top: -1px;
  }
`;

type TabProps = {
  isActive: boolean;
};

export const Tab = styled(BaseButton)<TabProps>`
  height: 100%;

  font-size: 12px;
  font-weight: 600;

  text-transform: uppercase;

  border-top: 1px solid transparent;
  border-color: ${(props) =>
    props.isActive ? props.theme.colors.text.primary : "transparent"};

  color: ${(props) => {
    return props.isActive
      ? props.theme.colors.text.primary
      : props.theme.colors.text.secondary;
  }};

  > svg {
    margin-right: 6px;
  }
`;

export const GridIcon = styled(InstagramGrid)`
  height: 12px;
  width: 12px;

  color: inherit;
`;

export const SavedIcon = styled(InstagramSave)`
  height: 12px;
  width: 12px;

  color: inherit;
`;

export const PersonIcon = styled(InstagramUser)`
  height: 12px;
  width: 12px;

  color: inherit;
`;
