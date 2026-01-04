import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Miguel" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/miguel/i);
  });

  it("should render Hello with the name when name is not provided", () => {
    render(<Greet />);

    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/login/i);
  });
});
