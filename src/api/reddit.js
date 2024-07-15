import axios from "axios";

// Base URL
export const REDDIT_API_ROOT = "https://www.reddit.com";

// getSubRedditPosts function
// Returns an array of posts for a specific subreddits
export const getSubredditPosts = async (subreddit) => {
  const response = await axios.get(`${REDDIT_API_ROOT}${subreddit}.json`);
  return response.data.children.map((post) => post.data);
};

// getSubreddits function
// Returns an array of subreddit topics
export const getSubreddits = async () => {
  const response = await axios.get(`${REDDIT_API_ROOT}/subreddits.json`);
  return response.data.children.map((subreddit) => subreddit.data);
};

// getPostComments function
// Returns an array of comments for a specific post
export const getPostComments = async (link) => {
  const response = await axios.get(`${REDDIT_API_ROOT}${link}.json`);
  return response[1].data.children.map((comment) => comment.data);
};
