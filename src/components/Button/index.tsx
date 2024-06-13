import styles from "./Button.module.scss";

type ButtonProps = {
  customClass?: string;
  children?: string;
  type?: string;
  onClick: () => void;
};

export default function Button({
  customClass,
  children,
  onClick,
  type = "default",
}: Readonly<ButtonProps>): React.ReactNode {
  return (
    <button
      className={`${styles.defaultButton} ${styles[type]} ${customClass}`}
      onClick={onClick}
    >
      {type === "cancel" ? "Sair" : children}
    </button>
  );
}
