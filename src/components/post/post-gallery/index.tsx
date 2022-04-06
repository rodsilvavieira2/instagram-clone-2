/* eslint-disable react/no-array-index-key */
import { useRef, useState } from "react";

import { GalleryItem } from "../../../@types";
import { DotsNav } from "./dots-nav";
import { Image } from "./image";
import {
  Container,
  InnerContainer,
  NextSlideButton,
  RightIconDiv,
  LeftIconDiv,
  PrevSlideButton,
  ImageWrapper,
} from "./styles";

export type GalleryProps = {
  items: GalleryItem[];
};

export function PostGallery({ items }: GalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slideRef = useRef<HTMLLIElement>(null);
  const slideContainerRef = useRef<HTMLUListElement>(null);

  const nextSlide = () => {
    if (currentSlide < items.length) {
      if (slideContainerRef.current && slideRef.current) {
        const width = slideRef.current.offsetWidth * currentSlide;

        slideContainerRef.current.style.transform = `translateX(-${width}px)`;

        setCurrentSlide((prev) => prev + 1);
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      if (slideContainerRef.current && slideRef.current) {
        const width =
          slideRef.current.offsetWidth -
          slideRef.current.offsetWidth * (currentSlide - 1);

        slideContainerRef.current.style.transform = `translateX(${width}px)`;

        setCurrentSlide((prev) => prev - 1);
      }
    }
  };

  return (
    <Container>
      <ImageWrapper>
        <InnerContainer ref={slideContainerRef}>
          {items.map((item, i) => (
            <li
              key={item.id}
              ref={i === 0 ? slideRef : undefined}
              data-is-current-slide={i === 0}
            >
              <Image src={item.url} alt={item.id} />
            </li>
          ))}
        </InnerContainer>

        {items.length > 1 && (
          <>
            {currentSlide !== items.length && (
              <NextSlideButton onClick={nextSlide}>
                <RightIconDiv />
              </NextSlideButton>
            )}

            {currentSlide !== 1 && (
              <PrevSlideButton onClick={prevSlide}>
                <LeftIconDiv />
              </PrevSlideButton>
            )}
          </>
        )}
      </ImageWrapper>

      {items.length > 1 && (
        <DotsNav currentSlide={currentSlide} quantity={items.length} />
      )}
    </Container>
  );
}
