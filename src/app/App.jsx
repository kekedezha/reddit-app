import Header from "../features/Header/Header.jsx";
import Home from "../features/Home/Home.jsx";
import Subreddits from "../features/Subreddits/Subreddits.jsx";

import "../App.css";

function App() {
  console.log("Hello i am being printed from App.jsx");
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
