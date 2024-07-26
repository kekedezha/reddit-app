import Comment from "../../../src/features/Comment/Comment";
import moment from "moment";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Comment component", () => {
  const testComment = {
    author: "Herman Miller",
    created_utc: 1634332639.0,
    body: "Herman miller chairs are the best designed chairs! Although quite expensive, they are totally worth your money!",
  };

  test("loads and displays main div", () => {
    const { container } = render(<Comment comment={testComment} />);
    const mainDiv = container.getElementsByClassName("comment");
    expect(mainDiv[0]).toBeInTheDocument();
  });

  test("loads proper comment author and time", () => {
    const { container } = render(<Comment comment={testComment} />);

    const pElements = container.querySelectorAll("p");
    const commentTime = moment.unix(testComment.created_utc).fromNow();

    expect(pElements[0]).toHaveTextContent("Herman Miller");
    expect(pElements[1]).toHaveTextContent(commentTime);
  });

  test("loads proper comment for subreddit post", () => {
    const { container } = render(<Comment comment={testComment} />);

    expect(container).toHaveTextContent(
      "Herman miller chairs are the best designed chairs! Although quite expensive, they are totally worth your money!"
    );
  });
});
