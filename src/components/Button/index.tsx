import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  type?: string;
  [propName: string]: React.ReactNode;
};

export default function Button({ type = "default", ...props }: ButtonProps) {
  return (
    <button className={`${styles.defaultButton} ${styles[type]}`} {...props}>
      {props.children}
    </button>
  );
}
