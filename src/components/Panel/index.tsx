import usePanel from "./usePanel";
import styles from "./Panel.module.scss";
import { PanelProps } from "./TPanelProps";

function Panel({ status, changeStatus, changeScore }: Readonly<PanelProps>) {
  const { level, caracters, mustPaint } = usePanel({
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
              className={`${styles.caracter} ${styles[mustPaint[key]]}`}
            >
              {caracter}
            </span>
          );
        })}
      </div>
      <progress style={{ width: "100%" }} value="4" max="5"></progress>
    </div>
  );
}

export default Panel;
