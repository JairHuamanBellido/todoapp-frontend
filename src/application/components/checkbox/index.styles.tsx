import styled, { css } from 'styled-components';

const CssChecboxActive = css`
  background: ${({ theme }) => theme.colors.highlightPrimary.default};
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%) rotate(45deg);
    transform-origin: center center;
    width: 4px;
    height: 12px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
  }
`;

export const CssCheckboxInactive = css`
  background: none;
`;
export const StyledChecboxContainer = styled.div<{ isActive: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.highlightPrimary.default};
  width: 24px;
  height: 24px;
  border-radius: 24px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  ${({ isActive }) => (isActive ? CssChecboxActive : CssCheckboxInactive)}
`;
