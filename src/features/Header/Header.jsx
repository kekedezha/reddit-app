import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setSearchTerm } from "../reddit/redditSlice";

import "./Header.css";
import { FaRedditAlien, FaSearch } from "react-icons/fa";

const Header = () => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setLocalSearchTerm(e.target.value);
  };

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(localSearchTerm));
  };

  return (
    <header>
      <div className="logo">
        <FaRedditAlien className="logo-icon" />
        <p>
          <span>sub</span>Reddit App
        </p>
      </div>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={localSearchTerm}
          onChange={onSearchTermChange}
          aria-label="Search Posts"
        />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
          <FaSearch />
        </button>
      </form>
      <div className="app-description">
        <p>A sub(stitute) to the Reddit app</p>
      </div>
    </header>
  );
};

export default Header;
