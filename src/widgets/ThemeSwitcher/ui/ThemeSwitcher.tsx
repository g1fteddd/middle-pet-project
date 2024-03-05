import classNames from "classnames";
import { useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg?react";
import { Theme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg?react";
import { Button, ThemeButton } from "shared/ui/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(className)}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
