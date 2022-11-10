import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should renders the component", () => {
    render(<App />);
    const divElement = screen.getByTestId("App.Container");
    expect(divElement).toBeInTheDocument();
  });
});
