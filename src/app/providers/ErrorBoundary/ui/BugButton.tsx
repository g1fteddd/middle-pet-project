import { Button } from "shared/ui/Button";
import { useEffect, useState } from "react";

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={throwError}>Throw Error</Button>;
};
