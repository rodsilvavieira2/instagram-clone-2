import {
  CSSProperties,
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from "react";

import { PublicationStatus } from "./publication-status";
import { Container, Image, GalleyIcon, InnerContainer } from "./styles";

type PostGalleryProps = {
  id: string;
  commentsCount: number;
  featuredPhotoUrl: string;
  photosCount: number;
  likesCount: number;
  style?: CSSProperties;
  className?: string;
  onOpenPost?: (id: string) => void;
};

const Base: ForwardRefRenderFunction<HTMLButtonElement, PostGalleryProps> = (
  {
    commentsCount,
    featuredPhotoUrl,
    photosCount,
    likesCount,
    style,
    className,
    onOpenPost,
    id,
  },
  ref
) => {
  const [isLoading, setIsLoading] = useState(true);

  const { width = "293px", height = "293px", ...rest } = style || {};

  return (
    <Container
      className={className}
      style={{ width, height, ...rest }}
      ref={ref}
      onClick={() => onOpenPost?.(id)}
    >
      <InnerContainer isLoading={isLoading}>
        <Image
          src={featuredPhotoUrl}
          alt="foto em destaque"
          onLoad={() => setIsLoading(false)}
        />

        <PublicationStatus likes={likesCount} commentsCount={commentsCount} />

        {photosCount > 1 && <GalleyIcon />}
      </InnerContainer>
    </Container>
  );
};

export const PostGallery = forwardRef(Base);
