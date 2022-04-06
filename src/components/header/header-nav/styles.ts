import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  InstagramExplore,
  InstagramHeart,
  InstagramHome,
  InstagramMessage,
  InstagramPublication,
} from "../../../icons";

export const Container = styled.nav`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 1.4rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  appearance: none;
  border: 0;
  background-color: transparent;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
`;

export const ExploreIcon = styled(InstagramExplore)``;

export const HeartIcon = styled(InstagramHeart)``;

export const HomeIcon = styled(InstagramHome)``;

export const MessageIcon = styled(InstagramMessage)``;

export const PublicationIcon = styled(InstagramPublication)``;
