import { Skeleton } from "../../animations";
import { Container, Header, Info, Photo } from "./styles";

export function PostSkeleton() {
  return (
    <Container>
      <Header>
        <Skeleton
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "32px",
          }}
        />

        <Info>
          <Skeleton
            style={{ width: "20%", height: "12px", borderRadius: "3px" }}
          />

          <Skeleton
            style={{
              width: "10%",
              height: "12px",
              marginTop: "5px",
              borderRadius: "3px",
            }}
          />
        </Info>
      </Header>

      <Photo />
    </Container>
  );
}
