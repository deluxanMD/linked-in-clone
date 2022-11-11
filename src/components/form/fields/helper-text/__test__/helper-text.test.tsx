import { render, screen } from "@testing-library/react";
import HelperText from "../helper-text.component";

const error = {
  message: "This is an error message"
};

const helperText = "This is a helper text";

describe("HelperText", () => {
  it("should renders the error", () => {
    render(<HelperText error={error} helperText={undefined} />);
    const errorEl = screen.getByTestId("HelperText.Error");
    expect(errorEl).toBeInTheDocument();
  });

  it("should renders the helper text", () => {
    render(<HelperText error={undefined} helperText={helperText} />);
    const errorEl = screen.getByTestId("HelperText.HelperText");
    expect(errorEl).toBeInTheDocument();
  });
});
