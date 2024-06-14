import styles from "./KeyboardGame.module.scss";
import Board from "../components/Board";
import InfoCard from "../components/InfoCard";
import useKeyboardGame from "./useKeyboardGame";

export default function KeyboardGame() {
  const { isIntroduction, isMobile } = useKeyboardGame();

  return (
    <main className={styles.main}>
      {isIntroduction ? (
        <img
          className={styles.logo}
          src="/images/ninja.svg"
          alt="Ninja de capuz"
        />
      ) : isMobile ? (
        <InfoCard />
      ) : (
        <Board />
      )}
    </main>
  );
}
