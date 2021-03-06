import { User } from "../../@types";
import { HeaderNav } from "./header-nav";
import { SearchInput } from "./search-input";
import { SuggestionItem } from "./search-input/recent-suggestions";
import {
  Container,
  BrandImage,
  InnerContainer,
  ImageWrapper,
  InputWrapper,
  NavWrapper,
} from "./styles";

type HeaderProps = Pick<User, "avatarUrl" | "subName" | "userName"> & {
  searchSuggestions: SuggestionItem[];
};

export function Header({
  avatarUrl,
  subName,
  searchSuggestions,
  userName,
}: HeaderProps) {
  return (
    <Container>
      <InnerContainer>
        <ImageWrapper to="/">
          <BrandImage src="/logo.png" alt="instagram" />
        </ImageWrapper>

        <InputWrapper>
          <SearchInput suggestions={searchSuggestions} />
        </InputWrapper>

        <NavWrapper>
          <HeaderNav
            avatarUrl={avatarUrl}
            subName={subName}
            userName={userName}
          />
        </NavWrapper>
      </InnerContainer>
    </Container>
  );
}
