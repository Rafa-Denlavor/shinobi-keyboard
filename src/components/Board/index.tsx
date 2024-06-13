import { useState } from "react";
import Button from "../Button";
import styles from "./Board.module.scss";
import { Status } from "../../enums/Status";
import Panel from "../Panel";
import { DifficultyBySeconds } from "../../enums/DifficultyBySeconds";

function Board() {
  const [score, setScore] = useState<number>(0);
  const [status, setStatus] = useState<string>(Status.INITIAL);
  const [timeDifficulty, setTimeDifficulty] = useState<number>(
    DifficultyBySeconds.MEDIUM
  );

  return (
    <section className={styles.boardWrapper}>
      <img
        className={styles.logo}
        src="/images/ninja.svg"
        alt="Ninja de capuz"
      />
      <h1>Shinobi Keyboard</h1>
      {status === Status.INITIAL && (
        <>
          <p>
            Experimente a emoção de digitar como um ninja e<br></br> domine o
            teclado!
          </p>
          <p>Escolha a dificuldade:</p>
          <div className={styles.initialButtons}>
            <Button
              onClick={() => {
                setTimeDifficulty(DifficultyBySeconds.EASY);
                setStatus(Status.PLAYING);
              }}
            >
              Fácil
            </Button>
            <Button
              onClick={() => {
                setTimeDifficulty(DifficultyBySeconds.MEDIUM);
                setStatus(Status.PLAYING);
              }}
            >
              Médio
            </Button>
            <Button
              onClick={() => {
                setTimeDifficulty(DifficultyBySeconds.HARD);
                setStatus(Status.PLAYING);
              }}
            >
              Difícil
            </Button>
            <Button
              onClick={() => {
                setTimeDifficulty(DifficultyBySeconds.NINJA);
                setStatus(Status.PLAYING);
              }}
            >
              Ninja
            </Button>
          </div>
        </>
      )}
      {status === Status.PLAYING && (
        <Panel
          timeDifficulty={timeDifficulty}
          status={status}
          changeStatus={setStatus}
          changeScore={setScore}
        />
      )}
      {(status === Status.FINISHED || status === Status.TIME_UP) && (
        <>
          <p>Score: {score}</p>
          <p>
            {status === Status.TIME_UP
              ? "O tempo esgotou, mas continua treinando para se tornar um Ninja Keyboard"
              : "Continue treinando e você dominará o teclado como um verdadeiro Ninja Keyboard!"}
          </p>
          <div>
            <Button
              customClass={styles.cancelButton}
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
  );
}

export default Board;
