import { useState } from "react";

import { SelectPostItem } from "./select-post-item";
import { Container } from "./styles";

type SelectedItem = {
  id: string;
  url: string;
  alt: string;
};

type SelectedItemState = SelectedItem & {
  isSelected: boolean;
};

type SelectPostsProps = {
  items: SelectedItem[];
};

export function SelectPosts({ items }: SelectPostsProps) {
  const [currentItems, setCurrentItems] = useState<SelectedItemState[]>(() => {
    return items.map((item) => ({
      ...item,
      isSelected: false,
    }));
  });

  const onToggleSelect = (id: string) => {
    setCurrentItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  return (
    <Container>
      {currentItems.map((item) => (
        <SelectPostItem
          key={item.id}
          onToggleSelect={onToggleSelect}
          {...item}
        />
      ))}
    </Container>
  );
}
