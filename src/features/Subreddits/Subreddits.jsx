import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubReddits } from "../subreddit/subRedditSlice";
import Card from "../../components/Card";
import "./Subreddits.css";
import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from "../reddit/redditSlice";

const Subreddits = () => {
  const dispatch = useDispatch();
  // Array of subreddits from the Redux store/subreddits slice
  const subreddits = useSelector((state) => state.subReddit.subReddits);
  // Get the state of 'selectedSubreddit' from reddit slice
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  // Get subreddits on first load and on any dispatch within this component.
  useEffect(() => {
    dispatch(fetchSubReddits());
  }, [dispatch]);

  return (
    <Card className="subreddit-card">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
              selectedSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <button
              type="button"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
              <img
                src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                }
                alt={`${subreddit.display_name}`}
                className="subreddit-icon"
                style={{ border: `3px solid ${subreddit.primary_color}` }}
              />
              {subreddit.display_name_prefixed}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Subreddits;
