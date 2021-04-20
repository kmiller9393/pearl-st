import { BREAKPOINT_MOBILE, BREAKPOINT_MOBILE_SMALL } from "./hooks/use-resize";

const breakpoints = [BREAKPOINT_MOBILE, BREAKPOINT_MOBILE_SMALL];

export const generateMQ = maxMin =>
  breakpoints.map(bp => `@media (${maxMin}-width: ${bp}px)`);
