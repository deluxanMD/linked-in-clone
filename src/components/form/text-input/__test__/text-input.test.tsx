import { render, screen } from "@testing-library/react";
import TextInput from "components/form/text-input/text-input.component";

describe("TextInput", () => {
  it("should renders the component", () => {
    render(<TextInput hint="type here..." value="" handleChange={() => {}} />);
    const inputElement = screen.getByTestId("TextInput");
    expect(inputElement).toBeInTheDocument();
  });

  it("should contains proper placeholder", () => {
    render(<TextInput hint="type here..." value="" handleChange={() => {}} />);
    const inputEl = screen.getByPlaceholderText(/type here/i);
    expect(inputEl).toBeInTheDocument();
  });
});
