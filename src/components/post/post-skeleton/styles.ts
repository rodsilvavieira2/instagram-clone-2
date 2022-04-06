import styled from "styled-components";

import { loadingSkeletonAnimation } from "../../animations";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  padding: 14px 4px 14px 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;

  flex: 1;
`;

export const Photo = styled.div`
  width: 100%;
  height: 475px;

  ${loadingSkeletonAnimation}
`;
