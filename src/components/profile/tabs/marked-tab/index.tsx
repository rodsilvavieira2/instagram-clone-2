import { PostGallery } from "../../../post-galley";
import { EmptyList, LoadingTab, PublicationItem } from "../shared";
import { Container, InnerContainer, MarkedIcon } from "./styles";

type MarkedTabProps = {
  items: PublicationItem[];
  isLoading: boolean;
};

export function MarkedTab({ items, isLoading }: MarkedTabProps) {
  if (isLoading) return <LoadingTab />;

  return (
    <Container>
      {items.length !== 0 ? (
        <InnerContainer>
          {items.map((item) => (
            <PostGallery key={item.id} {...item} />
          ))}
        </InnerContainer>
      ) : (
        <EmptyList
          heading="Fotos com você"
          icon={<MarkedIcon />}
          text="Quando as pessoas marcarem você em fotos, elas aparecerão aqui.s"
        />
      )}
    </Container>
  );
}
