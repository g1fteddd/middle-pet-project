import classNames from "classnames";
import styles from "./PageError.module.css";
import { Button } from "shared/ui/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(styles.PageError, className)}>
            <p>Произошла непредвиденная ошибка</p>
            <Button onClick={reloadPage}>Обновить страницу</Button>
        </div>
    );
};
