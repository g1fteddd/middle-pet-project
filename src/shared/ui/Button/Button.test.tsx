import { render, screen } from "shared/utils/test/test-utils";
import { Button } from ".";

describe("Button", () => {
    test("Проверка соответствия текста", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
