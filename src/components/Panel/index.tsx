import usePanel from "./usePanel";
import styles from "./Panel.module.scss";
import { PanelProps } from "./TPanelProps";
import Timer from "../Timer";
import { Status } from "../../enums/Status";
import Button from "../Button";

function Panel({
  timeDifficulty,
  status,
  changeStatus,
  changeScore,
}: Readonly<PanelProps>) {
  const { level, secondsLeft, caracters, typedCharacters } = usePanel({
    timeDifficulty,
    status,
    changeStatus,
    changeScore,
  });

  return (
    <div className={styles.panelWrapper}>
      <h2 className={styles.level}>Nível {level}</h2>
      <p>Digite todos os caracteres corretamente</p>
      <div className={styles.caractersContainer}>
        {caracters.map((caracter, key) => {
          return (
            <span
              key={caracter + key}
              className={`${styles.caracter} ${
                typedCharacters[key] && styles.toPaint
              }`}
            >
              {caracter}
            </span>
          );
        })}
      </div>
      <Timer remainingTime={secondsLeft} duration={timeDifficulty} />
      <Button
        customClass={styles.cancelButton}
        type="cancel"
        onClick={() => {
          changeScore(0);
          changeStatus(Status.INITIAL);
        }}
      >
        Sair
      </Button>
    </div>
  );
}

export default Panel;
