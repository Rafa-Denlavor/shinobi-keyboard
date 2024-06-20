import styles from "./Button.module.scss";

type ButtonProps = {
  icon?: string;
  customClass?: string;
  children?: string;
  type?: string;
  onClick: () => void;
  props?: React.ComponentProps<'button'>;
};

export default function Button({
  icon,
  customClass,
  children,
  onClick,
  type = "default",
  props
}: Readonly<ButtonProps>): React.ReactNode {
  const hasIcon = icon
    ? styles.iconButton
    : `${styles.defaultButton} ${styles[type]}`;

  return (
    <button className={`${hasIcon} ${customClass}`} onClick={onClick} {...props}>
      {icon && <img src={`/images/${icon}`} alt={icon} />}
      {type === "cancel" ? "Sair" : children}
    </button>
  );
}
