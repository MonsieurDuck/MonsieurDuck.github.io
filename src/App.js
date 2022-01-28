import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import {
    Navigation,
    Footer,
    Home,
    About,
    Contact,
    Blog,
    Posts,
    Post,
} from "./components";

function App() {
  return (
    <div className="App">
        <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />}>
                <Route path="" element={<Posts />} />
                <Route path=":postSlug" element={<Post />} />
            </Route>
        </Routes>
        <Footer />
        </Router>
      {/*<header className="App-header">
        <img src="./roundDuck.png" className="App-logo" />
        <p>
          Welcome to Dunstan Wang's Website!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/dunstanwang"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <iframe src="https://i.simmer.io/@Dunstanwang/track-stack" width="585px" height = "1266px"></iframe>
      </header>
      <footer>
      <small> *Currently in development </small>
      </footer>*/}
    </div>
  );
}

export default App;
