import { useState, useEffect } from "react";

function useKeyboardGame() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const MOBILE_AND_TABLET = 768;

  const handleResize = () => {
    setIsMobile(window.innerWidth <= MOBILE_AND_TABLET);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile,
  };
}

export default useKeyboardGame;
