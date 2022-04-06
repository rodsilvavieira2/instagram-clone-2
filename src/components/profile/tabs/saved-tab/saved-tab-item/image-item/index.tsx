import { useState } from "react";

import { Container, Image, CamIcon, Error } from "./styles";

type ImageItemProps = {
  url: string;
  alt: string;
};

export function ImageItem({ alt, url }: ImageItemProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <Container isLoading={isLoading}>
      {isError ? (
        <Error>
          <CamIcon />
        </Error>
      ) : (
        <Image
          src={url}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
        />
      )}
    </Container>
  );
}
