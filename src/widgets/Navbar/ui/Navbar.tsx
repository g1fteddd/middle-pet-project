import classNames from "classnames";
import styles from "./Navbar.module.css";
import { FC } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(styles.Navbar, className)}>
            <div className={styles.links}></div>
        </div>
    );
};
