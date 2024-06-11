import { useState } from "react";
import Button from "../Button";
import styles from "./Board.module.scss";
import { Status } from "./Enum";
import Panel from "../Panel";

function Board() {
  const [score, setScore] = useState<number>(0);
  const [status, setStatus] = useState<string>("initial");

  return (
    <main className={styles.main}>
      <section className={styles.boardWrapper}>
        <img
          className={styles.logo}
          src="/images/ninja.svg"
          alt="Ninja de capuz"
        />
        <h1>Ninja Keyboard</h1>
        {status === Status.INITIAL && (
          <>
            <p>
              Experimente a emoção de digitar como um ninja e<br></br> domine o
              teclado!
            </p>
            <Button onClick={() => setStatus(Status.PLAYING)}>Iniciar</Button>
          </>
        )}
        {status === Status.PLAYING && (
          <Panel changeStatus={setStatus} changeScore={setScore} />
        )}
        {status === Status.FINISHED && (
          <>
            <p>Score: {score}</p>
            <p>
              Continue treinando e você dominará o teclado como um verdadeiro
              Ninja Keyboard!
            </p>
            <div>
              <Button
                type="cancel"
                onClick={() => {
                  setScore(0);
                  setStatus(Status.INITIAL);
                }}
              >
                Sair
              </Button>
              <Button
                onClick={() => {
                  setScore(0);
                  setStatus(Status.PLAYING);
                }}
              >
                Jogar novamente
              </Button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Board;
