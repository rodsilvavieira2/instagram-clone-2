import { Skeleton } from "../../../animations";
import { Container, Info } from "./styles";

export function ConversationSkeleton() {
  return (
    <Container>
      <Skeleton
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          flexShrink: 0,
        }}
      />

      <Info>
        <Skeleton
          style={{
            width: "80%",
            height: "14px",
            borderRadius: "3px",
          }}
        />

        <Skeleton
          style={{
            width: "70%",
            height: "14px",
            borderRadius: "3px",
          }}
        />
      </Info>
    </Container>
  );
}
