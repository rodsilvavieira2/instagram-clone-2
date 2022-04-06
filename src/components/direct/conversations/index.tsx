import { ConversationItem, ConversationItemProps } from "./conversation-item";
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
};

export function Conversations({ isLoading, items }: ConversationsProps) {
  return (
    <Container>
      <Heading />

      <ConversionsList>
        {isLoading
          ? skeletonsLoading
          : items.map((item) => (
              <li key={item.id}>
                <ConversationItem {...item} />
              </li>
            ))}
      </ConversionsList>
    </Container>
  );
}
