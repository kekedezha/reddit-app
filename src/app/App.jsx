import Header from "../features/Header/Header.jsx";
import Home from "../features/Home/Home.jsx";
import Subreddits from "../features/Subreddits/Subreddits.jsx";

import "../App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;
