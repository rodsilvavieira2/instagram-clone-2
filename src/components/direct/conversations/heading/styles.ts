import styled from "styled-components";

import { BaseButton } from "@components/buttons";

export const Container = styled.header`
  display: flex;
  height: 60px;
  padding: 0 20px;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  flex-shrink: 0;
`;

export const UserName = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  line-height: 24px;
  flex: 1;
`;

export const Spacer = styled.div`
  width: 32px;
  margin-right: 8px;
`;

export const EditButton = styled(BaseButton)`
  margin-left: 8px;
`;
