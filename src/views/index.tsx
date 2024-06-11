import Board from "../components/Board";
import styles from "./Game.module.scss";

function Game() {
  return (
    <main className={styles.gameWrapper}>
      <Board />
    </main>
  );
}

export default Game;
