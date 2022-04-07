import { useInfinityScrollTrigger } from "../../../hooks";
import { ConversationItem, ConversationItemProps } from "./conversation-item";
import { ConversationLoading } from "./conversation-loading";
import { ConversationSkeleton } from "./conversation-skeleton";
import { Heading } from "./heading";
import { Container, ConversionsList } from "./styles";

const skeletonsLoading = Array.from({ length: 8 }, (_, i) => (
  <li key={i}>
    <ConversationSkeleton />
  </li>
));

type ConversationsProps = {
  items: ConversationItemProps[];
  isLoading: boolean;
  isFetching: boolean;
  haveMore: boolean;
  onLoadMore: () => void;
};

export function Conversations({
  isLoading,
  items,
  onLoadMore,
  haveMore,
  isFetching,
}: ConversationsProps) {
  const [lastConversation] = useInfinityScrollTrigger({
    handler: () => {
      if (!isFetching && haveMore) onLoadMore();
    },
  });

  return (
    <Container>
      <Heading />

      <ConversionsList>
        {isLoading
          ? skeletonsLoading
          : items.map((item, i) => (
              <li key={item.id}>
                <ConversationItem
                  ref={i + 1 === items.length ? lastConversation : undefined}
                  {...item}
                />
              </li>
            ))}

        {isFetching && (
          <li>
            <ConversationLoading />
          </li>
        )}
      </ConversionsList>
    </Container>
  );
}
