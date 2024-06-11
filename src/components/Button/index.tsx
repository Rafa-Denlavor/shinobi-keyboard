import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
  type?: string;
  onClick: () => void;
};

export default function Button({
  children,
  onClick,
  type = "default",
}: ButtonProps): React.ReactNode {
  return (
    <button
      className={`${styles.defaultButton} ${styles[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
