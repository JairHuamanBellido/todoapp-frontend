import styled from 'styled-components';

export const StyledSectionContainer = styled.div`
  width: 100%;
  padding-inline: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-inline: auto;
  max-width: 600px;
`;

export const StyledTitleContainer = styled.div`
  padding-block: 1rem;
`;

export const StyledTitle = styled.h1`
  ${({ theme }) => theme.fontSize.heading.l}
  color: ${({ theme }) => theme.colors.highlightSecondary.blackSurfacePrimary};
  font-weight: 300;
  text-align: center;
`;
