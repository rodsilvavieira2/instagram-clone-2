import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 60px;

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text.primary};

  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  flex-shrink: 0;

  z-index: 999;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 975px;

  margin: 0 auto;

  padding: 0 20px;
`;

export const BrandImage = styled.img`
  width: 103px;
  height: 29px;
`;

export const ImageWrapper = styled(Link)`
  text-decoration: none;
  flex: 1 0 127px;

  margin-top: 7px;
`;

export const InputWrapper = styled.div`
  flex: 0 1 auto;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  flex: 1 0 127px;
`;
