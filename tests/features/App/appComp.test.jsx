import App from "../../../src/app/App";
import { Provider } from "react-redux";
import store from "../../../src/app/store";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App Component", () => {
  test("loads and displays proper components", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const headerElement = container.querySelector("header");
    expect(headerElement).toBeInTheDocument();
    const mainElement = container.querySelector("main");
    expect(mainElement).toBeInTheDocument();
    const asideElement = container.querySelector("aside");
    expect(asideElement).toBeInTheDocument();
  });
});
