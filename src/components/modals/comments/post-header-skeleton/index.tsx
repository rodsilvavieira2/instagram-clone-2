import { Skeleton } from "../../../animations";
import { Container, Info } from "./styles";

export function PostHeaderSkeleton() {
  return (
    <Container>
      <Skeleton
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "32px",
          flexShrink: 0,
        }}
      />

      <Info>
        <Skeleton
          style={{ width: "30%", height: "12px", borderRadius: "3px" }}
        />

        <Skeleton
          style={{ width: "20%", height: "12px", borderRadius: "3px" }}
        />
      </Info>
    </Container>
  );
}
