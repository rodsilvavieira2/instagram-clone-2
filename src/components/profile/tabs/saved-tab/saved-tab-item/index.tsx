import { Saved } from "../../../../../@types";
import { ImageItem } from "./image-item";
import { Container, Overlay, CollectionName } from "./styles";

export type SavedTabItemProps = Pick<Saved, "collectionName" | "featuredUrls">;

export function SavedTabItem({
  collectionName,
  featuredUrls,
}: SavedTabItemProps) {
  return (
    <Container to={`${collectionName}`}>
      {featuredUrls.slice(0, 4).map((item) => (
        <ImageItem key={item.id} {...item} />
      ))}

      <Overlay>
        <CollectionName>{collectionName}</CollectionName>
      </Overlay>
    </Container>
  );
}
