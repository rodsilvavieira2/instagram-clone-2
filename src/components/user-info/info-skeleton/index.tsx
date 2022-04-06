import { Skeleton } from "../../animations";
import { Container } from "./styles";

export function InfoSkeleton() {
  return (
    <Container>
      <Skeleton
        style={{
          width: "100%",
          height: "13px",
          borderRadius: "3px",
        }}
      />

      <Skeleton
        style={{
          width: "100%",
          height: "13px",
          marginTop: "5px",
          borderRadius: "3px",
        }}
      />
    </Container>
  );
}
