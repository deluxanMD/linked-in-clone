import { render, screen } from "@testing-library/react";
import Login from "../login.component";
import { BrowserRouter } from "react-router-dom";

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

describe("Login", () => {
  it("should renders the component", () => {
    render(<MockLogin />);
    const el = screen.getByTestId("Login.Page");
    expect(el).toBeInTheDocument();
  });
});
