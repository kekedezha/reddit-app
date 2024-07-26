import Avatar from "../../../src/features/Avatar/Avatar";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Avatar component", () => {
  test("loads and displays proper elements", () => {
    const { container } = render(<Avatar name="Herman" />);

    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAccessibleName(
      "Herman's profile. Robots lovingly delivered by Robohash.org."
    );
  });
});
