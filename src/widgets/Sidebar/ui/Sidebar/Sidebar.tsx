import classNames from "classnames";
import styles from "./Sidebar.module.css";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg?react";
import MainIcon from "shared/assets/icons/main-20-20.svg?react";
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
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: isCollapse },
                className
            )}
        >
            <Button
                onClick={toggleSidebar}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={styles.collapseBtn}
                square
                size={ButtonSize.L}
            >
                {isCollapse ? ">" : "<"}
            </Button>
            <div className={styles.items}>
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                >
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>Главная</span>
                </AppLink>
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>О сайте</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
