import { Saved } from "../../../../@types";
import { EmptyList, LoadingTab } from "../shared";
import { SavedTabItem } from "./saved-tab-item";
import {
  Container,
  Header,
  NewCollectionButton,
  InnerContainer,
  AlertText,
  SavedIcon,
} from "./styles";

type SavedItem = Pick<
  Saved,
  "collectionName" | "featuredUrls" | "userName" | "id"
>;

type SavedTabProps = {
  items: SavedItem[];
  isLoading: boolean;
  onNewCollection: () => void;
};

export function SavedTab({ items, onNewCollection, isLoading }: SavedTabProps) {
  if (isLoading) return <LoadingTab />;

  return (
    <Container>
      <Header>
        <AlertText>Somente você pode ver o que salvou</AlertText>

        <NewCollectionButton onClick={onNewCollection}>
          Nova coleção
        </NewCollectionButton>
      </Header>

      {items.length !== 0 ? (
        <InnerContainer>
          {items.map((item) => (
            <SavedTabItem key={item.id} {...item} />
          ))}
        </InnerContainer>
      ) : (
        <EmptyList
          heading="Salvar"
          icon={<SavedIcon />}
          text="Salve fotos e vídeos que você queira ver novamente. Ninguém será
        notificado, e somente você poderá ver o que salvou."
        />
      )}
    </Container>
  );
}
