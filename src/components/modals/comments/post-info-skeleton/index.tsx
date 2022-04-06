import { Skeleton } from "../../../animations";
import { Container } from "./styles";

export function PostInfoSkeleton() {
  return (
    <Container>
      <Skeleton style={{ width: "40%", height: "14px", borderRadius: "3px" }} />

      <Skeleton style={{ width: "50%", height: "14px", borderRadius: "3px" }} />

      <Skeleton style={{ width: "30%", height: "14px", borderRadius: "3px" }} />
    </Container>
  );
}
