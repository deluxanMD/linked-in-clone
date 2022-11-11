import { render, screen } from "@testing-library/react";
import PasswordInput from "components/form/password-input/password-input.component";

describe("PasswordInput", () => {
  it("should renders the component", () => {
    render(<PasswordInput label="Password" name="password" />);
    const inputElement = screen.getByLabelText("Password");
    expect(inputElement).toBeInTheDocument();
  });
});
