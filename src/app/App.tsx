import classNames from "classnames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", theme)}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
