import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  text-decoration: none;

  gap: 2px;

  height: 298px;
  width: 298px;
  position: relative;

  overflow: hidden;

  border-radius: 3px;
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  background-image: linear-gradient(
    to top,
    rgba(38, 38, 38, 0.6),
    rgba(255, 255, 255, 0)
  );

  position: absolute;
  inset: 0;

  z-index: 2;

  &:hover {
    background-image: none;
  }
`;

export const CollectionName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  padding: 20px;
`;
