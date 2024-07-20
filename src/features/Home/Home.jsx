import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnimatedList } from "react-animated-list";
import Post from "../Post/Post";
import LoadingPost from "../Post/LoadingPost";
import {
  fetchPosts,
  setSearchTerm,
  fetchComments,
  selectFilteredPosts,
} from "../reddit/redditSlice";

import "./Home.css";
import { randomNumGen } from "../../utils/utilFunctions";

const Home = () => {
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit, dispatch]);

  const onToggleComments = (index, permalink) => {
    dispatch(fetchComments({ index, permalink }));
  };

  if (isLoading) {
    return (
      <AnimatedList animation="zoom">
        {Array(randomNumGen(3, 10)).fill(
          <LoadingPost key={randomNumGen(11, 51)} />
        )}
      </AnimatedList>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Failed to load posts.</h2>
        <button
          type="button"
          onClick={() => dispatch(fetchPosts(selectedSubreddit))}
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="error">
        <h2>No posts matching &#34;{searchTerm}&#34;</h2>
        <button type="button" onClick={() => dispatch(setSearchTerm(""))}>
          Go home
        </button>
      </div>
    );
  }

  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          onToggleComments={() => onToggleComments(index, post.permalink)}
        />
      ))}
    </>
  );
};

export default Home;
