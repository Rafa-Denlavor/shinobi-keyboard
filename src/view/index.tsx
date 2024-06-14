import styles from "./KeyboardGame.module.scss";
import Board from "../components/Board";
import InfoCard from "../components/InfoCard";
import useKeyboardGame from "./useKeyboardGame";

export default function KeyboardGame() {
  const { isMobile } = useKeyboardGame();

  return (
    <main className={styles.main}>{isMobile ? <InfoCard /> : <Board />}</main>
  );
}
