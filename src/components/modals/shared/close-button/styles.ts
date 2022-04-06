import styled from "styled-components";

import { InstagramClose } from "../../../../icons";
import { BaseButton } from "../../../buttons";

export const Container = styled(BaseButton)`
  position: fixed;

  top: 24px;
  right: 24px;
`;

export const CloseIcon = styled(InstagramClose)`
  height: 24px;
  width: 24px;

  color: ${(props) => props.theme.colors.primary};
`;
