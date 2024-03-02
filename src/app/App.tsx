import classNames from "classnames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", theme)}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Сменить тему</button>
        </div>
    );
};
