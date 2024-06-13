import usePanel from "./usePanel";
import styles from "./Panel.module.scss";
import { PanelProps } from "./TPanelProps";
import Timer from "../Timer";

function Panel({ status, changeStatus, changeScore }: Readonly<PanelProps>) {
  const { level, secondsLeft, caracters, typedCharacters } = usePanel({
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
      <Timer remainingTime={secondsLeft} duration={5} />
    </div>
  );
}

export default Panel;
