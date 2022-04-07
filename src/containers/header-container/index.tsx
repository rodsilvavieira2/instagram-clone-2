import { Header } from "../../components";
import { useGetSuggestionsQuery } from "../../redux/api/suggestions";
import { selectCurrentUser } from "../../redux/slices";
import { useAppSelector } from "../../redux/store";

export function HeaderContainer() {
  const currentUser = useAppSelector(selectCurrentUser);

  const { avatarUrl = "", subName = "", userName = "" } = currentUser || {};

  const { data = [] } = useGetSuggestionsQuery(undefined);

  return (
    <Header
      userName={userName}
      subName={subName}
      avatarUrl={avatarUrl}
      searchSuggestions={data}
    />
  );
}
