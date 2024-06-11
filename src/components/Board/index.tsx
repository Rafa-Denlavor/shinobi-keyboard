import Button from "../Button";
import styles from "./Board.module.scss";

function Board() {
  return (
    <div className={styles.boardWrapper}>
      <img className={styles.logo} src="/images/ninja.svg" alt="" />
      <h1>Ninja Keyboard</h1>
      <p>
        Experimente a emoção de digitar como um ninja e<br></br> domine o
        teclado!
      </p>
      <Button type="cancel">Iniciar</Button>
    </div>
  );
}

export default Board;
