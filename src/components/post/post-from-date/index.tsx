import { CSSProperties } from "react";

import { formateDate, fromDate } from "../../../util";
import { Container } from "./styles";

type PostDateFromProps = {
  children: string | Date;
  style?: CSSProperties;
};

export function PostFromDate({ children, style }: PostDateFromProps) {
  return (
    <Container
      style={style}
      dateTime={
        typeof children === "object" ? children.toISOString() : children
      }
      title={formateDate(children)}
    >
      {fromDate(children)}
    </Container>
  );
}
