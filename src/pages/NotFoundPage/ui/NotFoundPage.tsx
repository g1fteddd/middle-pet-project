import classNames from "classnames";
import styles from "./NotFoundPage.module.css";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div className={classNames(styles.NotFoundPage, className)}>
            Страница не найдена
        </div>
    );
};
