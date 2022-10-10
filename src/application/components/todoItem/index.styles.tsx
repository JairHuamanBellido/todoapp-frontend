import styled from 'styled-components';

export const StyledTodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledTodoItemTitle = styled.p`
  ${({ theme }) => theme.fontSize.paragraph.md};

  margin-left: 12px;
  color: ${({ theme }) =>
    theme.colors.coreIceberg.blackSurfaceSecondary};
`;
