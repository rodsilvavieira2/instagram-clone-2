import { AnimatePresence } from "framer-motion";
import { useState, InputHTMLAttributes, useRef } from "react";

import { RecentSuggestions, SuggestionItem } from "./recent-suggestions";
import { ClearButton, Container, Input, SearchIcon } from "./styles";

type SearchInputProps = {
  suggestions: SuggestionItem[];
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export function SearchInput({ suggestions, inputProps }: SearchInputProps) {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  function clearInputValue() {
    if (inputRef.current?.value) inputRef.current.value = "";
  }

  function onFocus() {
    setIsOpen(true);
    setIsOnFocus(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function onBlur() {
    setIsOnFocus(false);
  }

  return (
    <Container onFocus={onFocus} onBlur={onBlur}>
      {!isOnFocus && <SearchIcon />}

      <Input ref={inputRef} placeholder="Pesquisar" {...inputProps} />

      {inputProps?.value && (
        <ClearButton onClick={clearInputValue}> X </ClearButton>
      )}

      <AnimatePresence>
        {isOpen && <RecentSuggestions items={suggestions} onClose={onClose} />}
      </AnimatePresence>
    </Container>
  );
}
