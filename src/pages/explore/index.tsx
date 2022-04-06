import { Spinner, PostGallery } from "../../components";
import { useGetExploreQuery } from "../../redux/api/explore";
import { Container, InnerContainer, LoadingContainer } from "./styles";

export default function Explore() {
  const { data = [], isLoading } = useGetExploreQuery();

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <InnerContainer>
          {data.map((item, i) => (
            <PostGallery
              className={i % 2 === 0 ? "grid-tall" : "grid-wide"}
              style={{
                width: "100%",
                height: "100%",
              }}
              key={item.id}
              {...item}
            />
          ))}
        </InnerContainer>
      )}
    </Container>
  );
}
