import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import { shortenNumber } from "../../utils/utilFunctions";
import Card from "../../components/Card";
import Comment from "../Comment/Comment";
import Avatar from "../Avatar/Avatar";

import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage,
} from "react-icons/ti";
import "./Post.css";
import "react-loading-skeleton/dist/skeleton.css";

const Post = ({ post, onToggleComments }) => {
  const [voteValue, setVoteValue] = useState(0);

  const onHandleVote = (newValue) => {
    if (newValue === voteValue) {
      setVoteValue(0);
    } else if (newValue === 1) {
      setVoteValue(1);
    } else {
      setVoteValue(-1);
    }
  };

  const renderUpVote = () => {
    if (voteValue === 1) {
      return <TiArrowUpThick className="icon-action" />;
    }
    return <TiArrowUpOutline className="icon-action" />;
  };

  const renderDownVote = () => {
    if (voteValue === -1) {
      return <TiArrowDownThick className="icon-action" />;
    }
    return <TiArrowDownOutline className="icon-action" />;
  };

  const getVoteType = () => {
    if (voteValue === 1) {
      return "up-vote";
    }
    if (voteValue === -1) {
      return "down-vote";
    }

    return "";
  };

  const renderComments = () => {
    if (post.errorComments) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    }

    if (post.loadingComments && post.showingComments) {
      return (
        <div>
          <Skeleton count={5} height={25} width="100%" />
        </div>
      );
    }

    if (post.showingComments && !post.loadingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <article key={post.id}>
      <Card>
        <div className="post-wrapper">
          <div className="post-votes-container">
            <button
              type="button"
              className={`icon-action-button up-vote ${
                voteValue === 1 && "active"
              }`}
              onClick={() => onHandleVote(1)}
              aria-label="Up vote"
            >
              {renderUpVote()}
            </button>
            <p className={`post-votes-value ${getVoteType()}`}>
              {shortenNumber(post.ups, 0)}
            </p>
            <button
              type="button"
              className={`icon-action-button down-vote ${
                voteValue === -1 && "active"
              }`}
              onClick={() => onHandleVote(-1)}
              aria-label="Down vote"
            >
              {renderDownVote()}
            </button>
          </div>
          <div className="post-container">
            <h3 className="post-title">{post.title}</h3>

            <div className="post-image-container">
              <img src={post.url} alt="" className="post-image" />
            </div>

            <div className="post-details">
              <span className="author-details">
                <Avatar name={post.author} />
                <span className="author-username">{post.author}</span>
              </span>
              <span>{moment.unix(post.created_utc).fromNow()}</span>
              <span className="post-comments-container">
                <button
                  type="button"
                  className={`icon-action-button ${
                    post.showingComments && "showing-comments"
                  }`}
                  onClick={onToggleComments}
                  aria-label="Show comments"
                >
                  <TiMessage className="icon-action" />
                </button>
                {shortenNumber(post.num_comments, 0)}
              </span>
            </div>

            {renderComments()}
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Post;
