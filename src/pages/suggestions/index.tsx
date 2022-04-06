import { SuggestionItemSkeleton, SuggestionItem } from "../../components";
import {
  useGetSuggestionsQuery,
  useToggleFollowingMutation,
} from "../../redux/api/suggestions";
import { Container, Heading, SuggestionsList } from "./styles";

const skeletonsLoading = Array.from({ length: 8 }, (_, i) => (
  <li key={i}>
    <SuggestionItemSkeleton />
  </li>
));

export default function Suggestions() {
  const { data = [], isLoading } = useGetSuggestionsQuery(undefined);

  const [onFollow] = useToggleFollowingMutation();

  const handleOnFollow = async (id: string) => {
    await onFollow({ id });
  };

  return (
    <Container>
      <Heading>Sugestões</Heading>

      <SuggestionsList>
        {isLoading
          ? skeletonsLoading
          : data.map((item) => (
              <li key={item.id}>
                <SuggestionItem {...item} onFollow={handleOnFollow} />
              </li>
            ))}
      </SuggestionsList>
    </Container>
  );
}
