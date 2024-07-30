import Header from "../../../src/features/Header/Header";
import { Provider } from "react-redux";
import store from "../../../src/app/store";

import { beforeEach } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header component", () => {
  test("loads and displays logo", () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const logo = container.getElementsByClassName("logo");
    expect(logo[0]).toHaveTextContent("subReddit App");
  });

  test("loads and displays app description", () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const description = container.getElementsByClassName("app-description");
    expect(description[0]).toHaveTextContent(
      "A sub(stitute) to the Reddit app"
    );
  });

  test("loads and displays search bar", () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const searchBar = container.querySelector("input");
    expect(searchBar).toBeInTheDocument();
  });

  test("search bar updates state", () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const searchBar = container.querySelector("input");
  });
});
