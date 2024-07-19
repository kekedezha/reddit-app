import Skeleton from "react-loading-skeleton";
import { randomNumGen } from "../../utils/utilFunctions";

import "./Post.css";
import "./LoadingPost.css";
import {
  TiArrowUpThick,
  TiArrowDownThick,
  TiMessageTyping,
} from "react-icons/ti";

const LoadingPost = () => {
  return (
    <article className="post">
      <div className="post-votes-container">
        <button
          type="button"
          className="icon-action-button up-vote"
          aria-label="Up vote"
        >
          <TiArrowUpThick className="icon-action" />
        </button>
        <Skeleton className="post-votes-value post-votes-value-loading" />
        <button
          type="button"
          className="icon-action-button down-vote"
          aria-label="Down vote"
        >
          <TiArrowDownThick className="icon-action" />
        </button>
      </div>
      <div className="post-container">
        <h3 className="post-title">
          <Skeleton width={randomNumGen(100, 200)} />
        </h3>

        <div className="post-image-container">
          <Skeleton height={250} />
        </div>

        <div className="post-details">
          <span>
            <Skeleton width={randomNumGen(20, 50)} />
          </span>
          <span>
            <Skeleton width={randomNumGen(50, 100)} />
          </span>
          <span className="post-comments-container">
            <button
              type="button"
              className="icon-action-button"
              aria-label="Show comments"
            >
              <TiMessageTyping className="icon-action" />
            </button>
            <Skeleton width={randomNumGen(10, 50)} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default LoadingPost;
