import { CSSProperties, useState } from "react";

import { PublicationStatus } from "./publication-status";
import { Container, Image, GalleyIcon } from "./styles";

type PostGalleryProps = {
  commentsCount: number;
  featuredPhotoUrl: string;
  photosCount: number;
  likesCount: number;
  style?: CSSProperties;
  className?: string;
};

export function PostGallery({
  commentsCount,
  featuredPhotoUrl,
  photosCount,
  likesCount,
  style,
  className,
}: PostGalleryProps) {
  const [isLoading, setIsLoading] = useState(true);

  const { width = "293px", height = "293px", ...rest } = style || {};

  return (
    <Container
      className={className}
      style={{ width, height, ...rest }}
      isLoading={isLoading}
    >
      <Image
        src={featuredPhotoUrl}
        alt="foto em destaque"
        onLoad={() => setIsLoading(false)}
      />

      <PublicationStatus likes={likesCount} commentsCount={commentsCount} />

      {photosCount > 1 && <GalleyIcon />}
    </Container>
  );
}
