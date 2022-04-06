import { Container } from "./styles";

type ActiveLinkProps = {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  path: string;
  currentPath: string;
};

export function ActiveLink({
  currentPath,
  icon,
  path,
  activeIcon,
}: ActiveLinkProps) {
  return (
    <Container to={path}>{currentPath === path ? activeIcon : icon}</Container>
  );
}
