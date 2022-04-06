import { Variants } from "framer-motion";

export const variants: Variants = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.075,
    },
  },
  exit: {
    opacity: 0.5,
    y: -30,
    transition: {
      duration: 0.038,
    },
  },
};
