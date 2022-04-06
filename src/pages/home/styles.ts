import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 935px;
  padding-top: 30px;
`;

export const FeedSection = styled.div`
  flex: 0 1 614px;
  margin-right: 28px;
  min-width: 0;
`;

export const ProfileSection = styled.aside`
  flex: 0 1 293px;
`;

export const ProfileInnerSection = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;

  padding-top: 1.5rem;

  width: 293px;
`;

export const FeedList = styled.ul`
  list-style: none;
  padding-bottom: 60px;

  > li + li {
    margin-top: 24px;
  }
`;

export const InnerFeedSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 100%;
`;
