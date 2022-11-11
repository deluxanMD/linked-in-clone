import { render, screen } from "@testing-library/react";
import TextInput from "../text-input.component";

describe("TextInput", () => {
  it("should renders the component", () => {
    render(<TextInput label="label" name="name" />);
    const inputElement = screen.getByLabelText(/label/i);
    expect(inputElement).toBeInTheDocument();
  });
});
