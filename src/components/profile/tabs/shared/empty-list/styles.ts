import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  flex-shrink: 1;
  height: 322px;

  width: 100%;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 350px;
`;

export const SavedIcon = styled.div`
  background-image: url("/assets/icons.png");
  background-position: -192px -269px;
  height: 62px;
  width: 62px;
`;

export const Heading = styled.h1`
  margin: 24px 0;
  text-align: center;
  font-size: 28px;
  font-weight: 300;
  line-height: 32px;
`;

export const Text = styled.p`
  text-align: center;
`;
