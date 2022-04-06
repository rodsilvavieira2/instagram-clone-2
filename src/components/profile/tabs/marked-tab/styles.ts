import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 28px;
`;

export const MarkedIcon = styled.div`
  background-image: url("/assets/icons.png");
  background-repeat: no-repeat;
  background-position: -256px -269px;

  height: 62px;
  width: 62px;
`;
