import { StatusItem, StatusItemProps } from "./status-item";
import { Container, InnerContainer } from "./styles";

type StatusItem = StatusItemProps & {
  id: string;
};

type StatusBarProps = {
  items: StatusItem[];
};

export function StatusBar({ items }: StatusBarProps) {
  return (
    <Container>
      <InnerContainer>
        {items.map((item) => (
          <StatusItem key={item.id} {...item} />
        ))}
      </InnerContainer>
    </Container>
  );
}
