import { Link } from "react-router-dom";

import { linksConfig } from "./config";
import {
  Container,
  NavList,
  Navigation,
  Copyright,
  CopyrightText,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <Navigation>
        <NavList>
          {linksConfig.map(({ id, label, path }) => (
            <li key={id}>
              <Link to={path}>{label} </Link>
            </li>
          ))}
        </NavList>
      </Navigation>

      <Copyright>
        <CopyrightText>
          © All rights reserved for 2022 Instagram from Met
        </CopyrightText>
      </Copyright>
    </Container>
  );
}
