import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  margin-bottom: 64px;
`;

export const Navigation = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: row;

  margin-top: 24px;

  list-style: none;

  > li {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text.secondary};

    a {
      text-decoration: none;
      color: inherit;
      margin: 0 8px 8px 12px;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.text.secondary};

  font-size: 12px;

  margin: 12px 0 0;
`;

export const CopyrightText = styled.p``;
