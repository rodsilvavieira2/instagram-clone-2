import { Suggestion } from "../../../@types";
import {
  Container,
  Head,
  HeaderTitle,
  SeeALlSuggestions,
  SuggestionsList,
} from "./styles";
import { SuggestionForYouItem } from "./suggestions-for-you-item";
import { SuggestionItemSkeleton } from "./suggestions-item-skeleton";

const loadingSkeletons = Array.from({ length: 5 }, (_, i) => (
  <li key={i}>
    <SuggestionItemSkeleton />
  </li>
));

type SuggestionsForYouProps = {
  items: Suggestion[];
  isLoading?: boolean;
  onToggleFollow: (id: string) => Promise<void>;
};

export function SuggestionsForYou({
  items,
  isLoading,
  onToggleFollow,
}: SuggestionsForYouProps) {
  return (
    <Container>
      <Head>
        <HeaderTitle>Sugestões para você</HeaderTitle>

        <SeeALlSuggestions to="/suggestions">Ver tudo</SeeALlSuggestions>
      </Head>

      <SuggestionsList>
        {isLoading ? (
          loadingSkeletons
        ) : (
          <>
            {items.map((item) => (
              <li key={item.id}>
                <SuggestionForYouItem
                  {...item}
                  onToggleFollow={onToggleFollow}
                />
              </li>
            ))}
          </>
        )}
      </SuggestionsList>
    </Container>
  );
}
