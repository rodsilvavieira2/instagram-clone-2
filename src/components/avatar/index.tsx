import { CSSProperties, useState } from "react";

import { Container, Image } from "./styles";

const fallBackImageUrl = "/assets/user.png";

type LoadEvent = React.SyntheticEvent<HTMLImageElement, Event>;

export type AvatarSize = "small" | "medium" | "large" | "x-large";

type AvatarProps = {
  src?: string;
  alt?: string;
  style?: CSSProperties;
  size?: AvatarSize;
  onLoad?: (event: LoadEvent) => void;
};

export function Avatar({
  src,
  alt,
  style,
  onLoad,
  size = "medium",
}: AvatarProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const _onLoad = (event: LoadEvent) => {
    setIsLoading(false);
    onLoad?.(event);
  };

  return (
    <Container isLoading={isLoading} size={size} style={style}>
      <Image
        style={{ visibility: isLoading ? "hidden" : "visible" }}
        src={isError ? fallBackImageUrl : src}
        alt={alt}
        onLoad={_onLoad}
        onError={() => setIsError(true)}
      />
    </Container>
  );
}
