import { ImageItem } from "./image-item";
import { Container } from "./styles";

export type RecentPostItem = {
  id: string;
  src: string;
  alt: string;
};

type RecentPostsProps = {
  items: RecentPostItem[];
};

export function RecentPosts({ items }: RecentPostsProps) {
  return (
    <Container>
      {items.slice(0, 3).map(({ id, src, alt }) => (
        <ImageItem alt={alt} src={src} key={id} />
      ))}
    </Container>
  );
}
