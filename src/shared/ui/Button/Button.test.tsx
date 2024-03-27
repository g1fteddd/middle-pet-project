import { render, screen } from "shared/utils/test/test-utils";
import { Button, ThemeButton } from ".";

describe("Button", () => {
    test("Test render", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    test("Test clear theme", () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText("Test")).toHaveClass("clear");
    });
});
