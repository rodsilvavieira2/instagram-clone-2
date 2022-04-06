import { MouseEvent } from "react";

export function preventClick(cb: () => void) {
  return (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    cb();
  };
}
