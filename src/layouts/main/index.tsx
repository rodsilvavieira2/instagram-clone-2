import { Outlet } from "react-router-dom";

import { Container } from "./styles";

export const MainLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
