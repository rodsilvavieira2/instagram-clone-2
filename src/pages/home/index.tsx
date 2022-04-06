import {
  StatusContainer,
  FeedContainer,
  UserInfoContainer,
  SuggestionsForYouContainer,
} from "../../containers";
import {
  Container,
  FeedSection,
  ProfileSection,
  ProfileInnerSection,
  InnerFeedSection,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <FeedSection>
        <InnerFeedSection>
          <StatusContainer />

          <FeedContainer />
        </InnerFeedSection>
      </FeedSection>

      <ProfileSection>
        <ProfileInnerSection>
          <UserInfoContainer />

          <SuggestionsForYouContainer />
        </ProfileInnerSection>
      </ProfileSection>
    </Container>
  );
}
