import { SuggestionsForYou } from "../../components";
import {
  useGetSuggestionsQuery,
  useToggleFollowingMutation,
} from "../../redux/api/suggestions";

export const SuggestionsForYouContainer = () => {
  const { data = [], isLoading } = useGetSuggestionsQuery(undefined);

  const [toggleFollow] = useToggleFollowingMutation();

  const handleOnToggleFollowing = async (id: string) => {
    await toggleFollow({ id });
  };

  return (
    <SuggestionsForYou
      items={data.slice(0, 4)}
      isLoading={isLoading}
      onToggleFollow={handleOnToggleFollowing}
    />
  );
};
