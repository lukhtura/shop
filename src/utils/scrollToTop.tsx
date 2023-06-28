//Core
import { useEffect } from "react";
import { useLocation } from "react-router";
import { PropsWithChildren } from "react"

const ScrollToTop: React.FC<PropsWithChildren> = ({ children }) => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>

}

export default ScrollToTop;