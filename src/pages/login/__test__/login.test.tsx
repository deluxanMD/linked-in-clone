import { render, screen } from "@testing-library/react";
import Login from "../login.component";

describe("LoginForm", () => {
  it("should renders the component", () => {
    render(<Login />);
    const divElement = screen.getByTestId("Login.Page");
    expect(divElement).toBeInTheDocument();
  });
});
