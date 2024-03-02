import classNames from "classnames";
import styles from "./AppLink.module.css";
import { Link, LinkProps } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps, PropsWithChildren {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => {
    return (
        <Link
            className={classNames(styles.AppLink, styles[theme], className)}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
