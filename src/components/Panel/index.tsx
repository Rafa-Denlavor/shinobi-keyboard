import usePanel from "./usePanel";
import styles from "./Panel.module.scss";
import { PanelProps } from "./TPanelProps";

function Panel({ changeStatus, changeScore }: Readonly<PanelProps>) {
  const { level, caracters } = usePanel({ changeStatus, changeScore });

  return (
    <div className={styles.panelWrapper}>
      <h2 className={styles.level}>Nível {level}</h2>
      <p>Digite todos os caracteres corretamente</p>
      <div className={styles.caractersContainer}>
        {caracters.map((caracter, key) => {
          return (
            <span key={caracter + key} className={styles.caracter}>
              {caracter}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Panel;
