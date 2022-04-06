import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 10px;

  overflow: hidden;
`;
