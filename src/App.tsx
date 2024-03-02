import { Link, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useTheme } from "./theme/useTheme";
import classNames from "classnames";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", theme)}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
