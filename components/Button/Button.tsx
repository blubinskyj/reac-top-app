import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import { FiChevronRight } from "react-icons/fi";
import cn from "classnames";

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span className={cn(styles.arrow, { [styles.down]: arrow == "down" })}>
          <FiChevronRight />
        </span>
      )}
    </button>
  );
};
