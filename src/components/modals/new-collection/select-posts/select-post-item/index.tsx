import { CheckIcon, Container, Image, Overlay } from "./styles";

export type SelectPostItemProps = {
  id: string;
  url: string;
  alt: string;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
};

export function SelectPostItem({
  id,
  alt,
  url,
  onToggleSelect,
  isSelected,
}: SelectPostItemProps) {
  return (
    <Container onClick={() => onToggleSelect(id)}>
      <Image src={url} alt={alt} />

      {isSelected && (
        <Overlay>
          <CheckIcon />
        </Overlay>
      )}
    </Container>
  );
}
