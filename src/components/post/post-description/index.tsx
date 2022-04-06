import { useEffect, useRef, useState } from "react";

import {
  Container,
  UserName,
  Description,
  ShowMore,
  InnerContainer,
} from "./styles";
import styles from "./styles.module.css";

type PostDescriptionProps = {
  text: string;
  userName: string;
};

export function PostDescription({ text, userName }: PostDescriptionProps) {
  const [isHidden, setIsHidden] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      if (descriptionRef.current.innerHTML.length > 140) {
        setIsHidden(true);
      }
    }
  }, []);

  return (
    <Container>
      <InnerContainer className={isHidden ? styles.lineClamp : undefined}>
        <UserName to={`/${userName}/publication`}>{userName}</UserName>

        <Description ref={descriptionRef}>{text} </Description>
      </InnerContainer>

      {isHidden && <ShowMore onClick={() => setIsHidden(false)}>mais</ShowMore>}
    </Container>
  );
}
