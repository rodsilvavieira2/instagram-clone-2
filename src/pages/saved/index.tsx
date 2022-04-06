import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import faker from "@faker-js/faker";

import { PostGallery } from "../../components";
import { Loading } from "./loading";
import {
  Container,
  CollectionName,
  InnerContainer,
  BackLink,
  BackArrow,
} from "./styles";

const items = Array.from({ length: 10 }, () => ({
  id: faker.datatype.uuid(),
  commentsCount: faker.datatype.number(),
  featuredPhotoUrl: faker.image.imageUrl(),
  photosCount: faker.datatype.number(),
  likesCount: faker.datatype.number(),
}));

type SavedPageParams = {
  collectionName: string;
  userName: string;
};

export default function Saved() {
  const { collectionName, userName } = useParams<SavedPageParams>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BackLink to={`/${userName}/saved`}>
            <BackArrow /> Salvos
          </BackLink>

          <CollectionName>{collectionName}</CollectionName>

          <InnerContainer>
            {items.map((item) => (
              <PostGallery key={item.id} {...item} />
            ))}
          </InnerContainer>
        </>
      )}
    </Container>
  );
}
