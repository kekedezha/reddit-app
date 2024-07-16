import "./Header.css";
import { FaRedditAlien } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <FaRedditAlien className="logo-icon" />
        <p>
          <span>sub</span>Reddit App
        </p>
      </div>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search"
          value={3}
          onChange={() => {}}
          aria-label="Search Posts"
        />
        <button type="submit" onClick={() => {}} aria-label="Search">
          Search
        </button>
      </form>
      <div className="app-description">
        <p>A sub(stitute) to the Reddit app</p>
      </div>
    </header>
  );
};

export default Header;
