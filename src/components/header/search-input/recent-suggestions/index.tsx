import { useEffect, useRef, useState } from "react";

import { useOutsideClick } from "../../../../hooks";
import { variants } from "./config";
import { EmptySuggestions } from "./empty-suggestions";
import {
  Container,
  InnerContainer,
  SuggestionsHeader,
  Title,
  ClearSuggestionButton,
  ListItems,
} from "./styles";
import { SuggestionItem, SuggestionItemProps } from "./suggestion-item";

export type SuggestionItem = Omit<SuggestionItemProps, "onRemove" | "onClose">;

type RecentSuggestionsProps = {
  items: SuggestionItem[];
  onClose: () => void;
};

export const RecentSuggestions = ({
  items,
  onClose,
}: RecentSuggestionsProps) => {
  const [currentItems, setCurrentItems] = useState<SuggestionItem[]>(items);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  const onRemoveItem = (id: string) =>
    setCurrentItems((prev) => prev.filter((item) => item.id !== id));

  const onClear = () => setCurrentItems([]);

  useOutsideClick({
    ref: containerRef,
    handler: onClose,
  });

  return (
    <Container ref={containerRef}>
      <InnerContainer variants={variants} animate="animate" exit="exit">
        <SuggestionsHeader>
          <Title>Recentes</Title>

          <ClearSuggestionButton onClick={onClear}>
            Limpar tudo
          </ClearSuggestionButton>
        </SuggestionsHeader>

        {currentItems.length !== 0 ? (
          <ListItems>
            {currentItems.map((item) => (
              <li key={item.id}>
                <SuggestionItem
                  {...item}
                  onRemove={onRemoveItem}
                  onClose={onClose}
                />
              </li>
            ))}
          </ListItems>
        ) : (
          <EmptySuggestions />
        )}
      </InnerContainer>
    </Container>
  );
};
