import { useLocation } from "react-router-dom";

import { User } from "../../../@types";
import { InstagramHomeFill, InstagramExploreFill } from "../../../icons";
import { ActiveLink } from "./active-link";
import { AvatarMenu } from "./avatar-menu";
import {
  Container,
  ExploreIcon,
  HeartIcon,
  HomeIcon,
  PublicationIcon,
  Button,
  StyledLink,
} from "./styles";

type HeaderNavProps = Pick<User, "avatarUrl" | "subName" | "userName">;

export function HeaderNav({ avatarUrl, subName, userName }: HeaderNavProps) {
  const { pathname } = useLocation();

  return (
    <Container>
      <ActiveLink
        icon={<HomeIcon />}
        activeIcon={<InstagramHomeFill />}
        currentPath={pathname}
        path="/"
      />
      <StyledLink to="/explore">
        <PublicationIcon />
      </StyledLink>

      <ActiveLink
        icon={<ExploreIcon />}
        activeIcon={<InstagramExploreFill />}
        currentPath={pathname}
        path="/explore"
      />

      <Button>
        <HeartIcon />
      </Button>

      <AvatarMenu avatarUrl={avatarUrl} subName={subName} userName={userName} />
    </Container>
  );
}
