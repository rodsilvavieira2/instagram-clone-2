import { Header } from "../../components";
import { useGetSuggestionsQuery } from "../../redux/api/suggestions";
import { selectCurrentUser } from "../../redux/slices";
import { useAppSelector } from "../../redux/store";

export function HeaderContainer() {
  const currentUser = useAppSelector(selectCurrentUser);

  const { avatarUrl = "", subName = "" } = currentUser || {};

  const { data = [] } = useGetSuggestionsQuery(undefined);

  return (
    <Header subName={subName} avatarUrl={avatarUrl} searchSuggestions={data} />
  );
}
