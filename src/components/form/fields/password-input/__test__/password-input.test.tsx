import { render, screen, fireEvent } from "@testing-library/react";
import PasswordInput from "../password-input.component";

describe("PasswordInput", () => {
  it("should renders the component", () => {
    render(<PasswordInput label="Password" name="password" />);
    const inputElement = screen.getByLabelText("Password");
    expect(inputElement).toBeInTheDocument();
  });

  it("should have password type", () => {
    render(<PasswordInput label="Password" name="password" />);
    const inputElement = screen.getByLabelText("Password");
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it("should change the type when clicking icon", () => {
    render(<PasswordInput label="Password" name="password" />);
    const inputElement = screen.getByLabelText("Password");
    const iconButton = screen.getByTestId("PasswordInput.IconButton");
    fireEvent.click(iconButton);
    expect(inputElement).toHaveAttribute("type", "text");
  });
});
