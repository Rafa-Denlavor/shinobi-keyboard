import { useState } from "react";
import Button from "../Button";
import styles from "./Board.module.scss";
import { Status } from "../../enums/Status";
import Panel from "../Panel";
import { DifficultyBySeconds } from "../../enums/DifficultyBySeconds";
import AudioPlayer from "../AudioPlayer";
import { difficultyLabel } from "./helpers/difficultyLabel";

function Board() {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState<number>(0);
  const [status, setStatus] = useState<string>(Status.INITIAL);
  const [toggleMute, setToggleMute] = useState(false);
  const [timeDifficulty, setTimeDifficulty] = useState<number>(
    DifficultyBySeconds.MEDIUM
  );

  const handleSound = () => {
    console.log(started);
    setToggleMute(!toggleMute);
  };

  return (
    <section className={styles.boardWrapper}>
      <AudioPlayer soundEffect=".mp3" muted={toggleMute} loop={true} />
      <Button
        customClass={styles.muteButton}
        onClick={handleSound}
        icon={toggleMute ? "sound-off.svg" : "sound-up.svg"}
      />
      <img
        className={styles.logo}
        src="/images/ninja.svg"
        alt="Ninja de capuz"
      />
      <h1>Shinobi Keyboard</h1>
      {status === Status.INITIAL && (
        <>
          <p>
            Experimente a emoção de digitar como um ninja e domine o teclado!
          </p>
          <p>Escolha a dificuldade:</p>
          <div className={styles.initialButtons}>
            {Object.entries(DifficultyBySeconds).map((data) => {
              return (
                <Button
                  key={data[0]}
                  onClick={() => {
                    setTimeDifficulty(data[1]);
                    setStatus(Status.PLAYING);
                    setStarted(true);
                  }}
                >
                  {difficultyLabel[data[1]]}
                </Button>
              );
            })}
          </div>
        </>
      )}
      {status === Status.PLAYING && (
        <Panel
          audioStatus={toggleMute}
          timeDifficulty={timeDifficulty}
          status={status}
          changeStatus={setStatus}
          changeScore={setScore}
        />
      )}
      {(status === Status.FINISHED || status === Status.TIME_UP) && (
        <>
          <AudioPlayer soundEffect="finished.mp3" muted={toggleMute} />
          <p>Score: {score}</p>
          <p>
            {status === Status.TIME_UP
              ? "O tempo esgotou, mas continua treinando para se tornar um Ninja Keyboard"
              : "Continue treinando e você dominará o teclado como um verdadeiro Ninja Keyboard!"}
          </p>
          <div className={styles.finishedButtons}>
            <Button
              type="cancel"
              onClick={() => {
                setScore(0);
                setStatus(Status.INITIAL);
              }}
            />
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
