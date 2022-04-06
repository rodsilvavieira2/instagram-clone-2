import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 68%;
  left: 10%;

  z-index: 2;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;

  box-shadow: ${(props) => props.theme.boxShadow.base};

  overflow: hidden;
`;

export const Heading = styled.div`
  display: flex;
  padding: 1rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 18px;
`;

export const UserName = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.highlight};
`;

export const SubName = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const StatusInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
