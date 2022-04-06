import { Skeleton } from "../../animations";
import { Container, Info } from "./styles";

export function SuggestionItemSkeleton() {
  return (
    <Container>
      <Skeleton
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          flexShrink: 0,
          marginRight: "14px",
        }}
      />

      <Info>
        <Skeleton
          style={{
            width: "20%",
            height: "14px",
            borderRadius: "3px",
          }}
        />

        <Skeleton
          style={{
            width: "15%",
            height: "14px",
            borderRadius: "3px",
          }}
        />
      </Info>
    </Container>
  );
}
