import { useState, useEffect } from "react";
import styles from "./KeyboardGame.module.scss";
import Board from "../components/Board";
import InfoCard from "../components/InfoCard";

export default function KeyboardGame() {
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

  return (
    <main className={styles.main}>{isMobile ? <InfoCard /> : <Board />}</main>
  );
}
