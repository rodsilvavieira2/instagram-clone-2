import { PostGallery } from "../../../post-galley";
import { SavedIcon } from "../saved-tab/styles";
import { EmptyList, LoadingTab, PublicationItem } from "../shared";
import { Container } from "./styles";

type PublicationTabProps = {
  items: PublicationItem[];
  isLoading: boolean;
  onOpenPost: (id: string) => void;
};

export function PublicationTab({
  items,
  isLoading,
  onOpenPost,
}: PublicationTabProps) {
  if (isLoading) return <LoadingTab />;

  return (
    <Container>
      {items.length !== 0 ? (
        items.map((item) => (
          <PostGallery key={item.id} {...item} onOpenPost={onOpenPost} />
        ))
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
