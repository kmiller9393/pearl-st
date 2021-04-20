import { useEffect, useState } from "react";

export const BREAKPOINT_MOBILE = 980;
export const BREAKPOINT_MOBILE_SMALL = 768;

export const useResize = () => {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
    isMobile: undefined,
    isDesktop: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= BREAKPOINT_MOBILE,
        isDesktop: window.innerWidth > BREAKPOINT_MOBILE,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
