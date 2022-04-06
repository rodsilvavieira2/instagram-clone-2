import { Skeleton } from "../../../animations";
import { AvatarWrapper, Container, Info, InnerContainer } from "./styles";

export function SuggestionItemSkeleton() {
  return (
    <Container>
      <InnerContainer>
        <AvatarWrapper>
          <Skeleton
            style={{ width: "32px", height: "32px", borderRadius: "32px" }}
          />
        </AvatarWrapper>

        <Info>
          <Skeleton
            style={{ width: "40%", height: "12px", borderRadius: "3px" }}
          />

          <Skeleton
            style={{
              width: "30%",
              height: "12px",
              marginTop: "5px",
              borderRadius: "3px",
            }}
          />
        </Info>
      </InnerContainer>
    </Container>
  );
}
