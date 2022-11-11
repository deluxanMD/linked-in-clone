import { render, screen } from "@testing-library/react";
import TextInput from "components/form/text-input/text-input.component";

describe("TextInput", () => {
  it("should renders the component", () => {
    render(<TextInput label="label" />);
    const inputElement = screen.getByLabelText(/label/i);
    expect(inputElement).toBeInTheDocument();
  });
});
