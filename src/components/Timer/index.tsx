import styles from "./Timer.module.scss";

type TTimerProps = {
  remainingTime: number;
  duration: number;
};

function Timer({ remainingTime, duration }: Readonly<TTimerProps>) {
  return (
    <progress
      className={styles.progressBar}
      value={String(remainingTime)}
      max={String(duration)}
    ></progress>
  );
}

export default Timer;
