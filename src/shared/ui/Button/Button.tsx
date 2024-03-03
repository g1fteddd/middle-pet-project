import classNames from "classnames";
import styles from "./Button.module.css";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps
    extends PropsWithChildren,
        ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button = ({
    className,
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
}: ButtonProps) => {
    return (
        <button
            className={classNames(styles.Button, styles[theme], className)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
