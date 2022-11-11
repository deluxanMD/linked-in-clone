import { render, screen } from "@testing-library/react";
import LoginForm from "../login-form.component";

describe("LoginForm", () => {
  it("should renders the component", () => {
    render(<LoginForm />);
    const divElement = screen.getByTestId("Login.Form");
    expect(divElement).toBeInTheDocument();
  });
});
