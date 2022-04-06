import { PostGallery } from "../../../post-galley";
import { SavedIcon } from "../saved-tab/styles";
import { EmptyList, LoadingTab, PublicationItem } from "../shared";
import { Container } from "./styles";

type PublicationTabProps = {
  items: PublicationItem[];
  isLoading: boolean;
};

export function PublicationTab({ items, isLoading }: PublicationTabProps) {
  if (isLoading) return <LoadingTab />;

  return (
    <Container>
      {items.length !== 0 ? (
        items.map((item) => <PostGallery key={item.id} {...item} />)
      ) : (
        <EmptyList
          heading="Publicações"
          icon={<SavedIcon />}
          text="Suas publicações serão vistas aqui"
        />
      )}
    </Container>
  );
}
