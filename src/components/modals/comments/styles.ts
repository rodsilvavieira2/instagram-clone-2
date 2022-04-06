import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoSection = styled.div`
  max-width: 583px;
  flex-basis: 583px;

  height: 583px;
  overflow: hidden;

  background-color: rgb(0, 0, 0);
`;

export const CommentsSection = styled.div`
  display: flex;
  background-color: #fff;

  max-width: 500px;
  min-width: 405px;

  min-height: 583px;
`;

export const CommentsList = styled.ul`
  list-style: none;

  > li {
    padding-top: 12px;
  }
`;

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  min-height: 0;
  max-height: 345px;

  overflow-y: auto;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  padding: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InnerCommentsSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  min-height: 0;
`;
