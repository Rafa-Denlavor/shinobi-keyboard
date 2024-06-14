import { useState, useEffect } from "react";

function useKeyboardGame() {
  const [isIntroduction, setIntroduction] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const MOBILE_AND_TABLET = 768;

  const handleResize = () => {
    setIsMobile(window.innerWidth <= MOBILE_AND_TABLET);
  };

  setTimeout(() => {
    setIntroduction(false);
  }, 2500);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile,
    isIntroduction,
  };
}

export default useKeyboardGame;
