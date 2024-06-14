import styles from "./Button.module.scss";

type ButtonProps = {
  icon?: string;
  customClass?: string;
  children?: string;
  type?: string;
  onClick: () => void;
};

export default function Button({
  icon,
  customClass,
  children,
  onClick,
  type = "default",
}: Readonly<ButtonProps>): React.ReactNode {
  const hasIcon = icon
    ? styles.iconButton
    : `${styles.defaultButton} ${styles[type]}`;

  return (
    <button className={`${hasIcon} ${customClass}`} onClick={onClick}>
      {icon && <img src={`/images/${icon}`} alt={icon} />}
      {type === "cancel" ? "Sair" : children}
    </button>
  );
}
