import classNames from "classnames";
import styles from "./Sidebar.module.css";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [isCollapse, setIsCollapse] = useState(false);

    const toggleSidebar = () => {
        setIsCollapse((prev) => !prev);
    };
    return (
        <div
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: isCollapse },
                className
            )}
        >
            <button onClick={toggleSidebar}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
