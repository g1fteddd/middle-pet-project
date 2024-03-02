import { Link } from "react-router-dom";
import classNames from "classnames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", theme)}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <AppRouter />
        </div>
    );
};
