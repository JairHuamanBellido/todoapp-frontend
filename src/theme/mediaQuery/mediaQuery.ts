import { IBreakpoints, breakpoints } from "../breakpoints/breakpoints";
export const mediaQuery = (breakpoint: keyof IBreakpoints) => {
  return `(min-width: ${breakpoints[breakpoint]}px)`;
};
