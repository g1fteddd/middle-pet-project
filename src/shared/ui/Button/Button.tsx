import classNames from "classnames";
import styles from "./Button.module.css";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { ButtonSize, ButtonTheme } from "./Button.model";

interface ButtonProps
    extends PropsWithChildren,
        ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button = ({
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    square,
    size = ButtonSize.M,
    ...otherProps
}: ButtonProps) => {
    const mods = {};

    const buttonClass = classNames(
        styles.Button,
        [styles[theme]],
        [styles[size]],
        { [styles.square]: square },
        mods,
        className
    );

    return (
        <button className={buttonClass} {...otherProps}>
            {children}
        </button>
    );
};
