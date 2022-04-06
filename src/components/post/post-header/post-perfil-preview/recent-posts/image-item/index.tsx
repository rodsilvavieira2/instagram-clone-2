import { useState } from "react";

import { Container, ErrorIcon, Image } from "./styles";

type ImageItemProps = {
  alt: string;
  src: string;
};

export function ImageItem({ alt, src }: ImageItemProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <Container isLoading={isLoading} isError={isError}>
      {isError ? (
        <ErrorIcon />
      ) : (
        <Image
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
        />
      )}
    </Container>
  );
}
