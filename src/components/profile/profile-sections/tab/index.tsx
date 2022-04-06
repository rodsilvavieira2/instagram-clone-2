import { TabType } from "..";

import { Container } from "./styles";

type TabProps = {
  label: string;
  currentTab: TabType;
  tab: TabType;
  icon: JSX.Element;
  to: string;
};

export function Tab({ currentTab, tab, icon, label, to }: TabProps) {
  return (
    <Container
      to={to}
      aria-selected={currentTab === tab}
      isActive={currentTab === tab}
      role="tab"
    >
      {icon}

      {label}
    </Container>
  );
}
