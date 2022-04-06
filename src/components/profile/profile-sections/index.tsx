import { Container, TabList, GridIcon, PersonIcon, SavedIcon } from "./styles";
import { Tab } from "./tab";

export type TabType = "publication" | "saved" | "marked";

type ProfileSectionsProps = {
  userName: string;
  currentTab: TabType;
};

export function ProfileSections({
  currentTab,
  userName,
}: ProfileSectionsProps) {
  return (
    <Container>
      <TabList role="tablist">
        <Tab
          currentTab={currentTab}
          tab="publication"
          label="Publicações"
          icon={<GridIcon />}
          to={`/${userName}`}
        />

        <Tab
          currentTab={currentTab}
          tab="saved"
          label="Salvos"
          icon={<SavedIcon />}
          to={`/${userName}/saved`}
        />

        <Tab
          currentTab={currentTab}
          tab="marked"
          label="Marcados"
          icon={<PersonIcon />}
          to={`/${userName}/marked`}
        />
      </TabList>
    </Container>
  );
}
