import { render, screen } from "@testing-library/react";
import Links from "../links.component";
import { BrowserRouter } from "react-router-dom";

type MockLinksType = {
  text: string;
  path: string;
};

const MockLinks = ({ text, path }: MockLinksType) => {
  return (
    <BrowserRouter>
      <Links text={text} path={path} />
    </BrowserRouter>
  );
};

describe("Links", () => {
  it("should renders the component", () => {
    render(<MockLinks text="terms" path="forgot" />);
    const linkEl = screen.getByTestId("Links");
    expect(linkEl).toBeInTheDocument();
  });
});
