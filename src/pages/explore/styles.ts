import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 935px;
  padding-top: 30px;

  .grid-tall {
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
  }
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(294px, 1fr));
  grid-auto-rows: 294px;
  width: 100%;

  gap: 28px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80vh;
  width: 100%;
`;
