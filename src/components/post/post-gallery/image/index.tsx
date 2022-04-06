import { useState } from "react";

import { Container, ErrorIcon } from "./styles";

type ImageProps = {
  src?: string;
  alt?: string;
};

export function Image({ alt, src }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <Container isError={isError} isLoading={isLoading}>
      {isError ? (
        <ErrorIcon />
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
        />
      )}
    </Container>
  );
}
