import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <p className="logo-icon">Logo will go here</p>
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
    </header>
  );
};

export default Header;
