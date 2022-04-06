import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 935px;
  margin: 24px auto 0;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 28px;
`;

export const CollectionName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 12px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;

  font-weight: 600;

  text-decoration: none;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const BackArrow = styled(MdArrowBackIos)`
  font-size: 24px;
`;
