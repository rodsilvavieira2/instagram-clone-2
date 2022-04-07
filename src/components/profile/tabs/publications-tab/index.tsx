import { useInfinityScrollTrigger } from "../../../../hooks";
import { PostGallery } from "../../../post-galley";
import { SavedIcon } from "../saved-tab/styles";
import { EmptyList, LoadingTab, PublicationItem } from "../shared";
import { Container } from "./styles";

type PublicationTabProps = {
  items: PublicationItem[];
  isLoading: boolean;
  isFetching: boolean;
  haveMore: boolean;
  onLoadMore: () => void;
  onOpenPost: (id: string) => void;
};

export function PublicationTab({
  items,
  isLoading,
  onOpenPost,
  isFetching,
  haveMore,
  onLoadMore,
}: PublicationTabProps) {
  if (isLoading) return <LoadingTab />;

  const [lastPublicationRef] = useInfinityScrollTrigger({
    handler: () => {
      if (!isFetching && haveMore) {
        onLoadMore();
      }
    },
  });

  return (
    <Container>
      {items.length !== 0 ? (
        items.map((item, i) => (
          <PostGallery
            {...item}
            ref={
              i + 1 === items.length && haveMore
                ? lastPublicationRef
                : undefined
            }
            key={item.id}
            onOpenPost={onOpenPost}
          />
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
