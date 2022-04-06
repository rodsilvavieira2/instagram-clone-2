import { motion } from "framer-motion";
import styled from "styled-components";

import { InstagramHeartFill } from "../../../../icons";
import { ActionButton } from "../shared";

export const Container = styled(ActionButton)``;

export const IconWrapper = styled(motion.span)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeartIcon = styled(InstagramHeartFill)`
  fill: ${(props) => props.theme.colors.brand};
`;
