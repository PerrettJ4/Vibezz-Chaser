// import Input from "../Input";
// import "./App.css";
import React, { useEffect, useState } from "react";
// import Dropdown from "../Dropdown";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Homepage from "../HomePage";
import SearchResults from "../SearchResults";
import ArtistsPage from "../ArtistsPage";
import CitiesPage from "../CitiesPage";

function App() {
  const [query, setQuery] = useState(["The Painkillers", "London"]);
  const [dark, setDark] = useState(false);
  console.log("Query passing through App: ", query);

  // Match browser color scheme
  useEffect(() => {
    const colourScheme = localStorage.getItem("color-scheme");
    if (colourScheme) {
      setDark(colourScheme === "dark");
      console.log("LOCAL STORAGE", localStorage.getItem("color-scheme"));
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDark(true);
    }
  }, []);

  // retain theme choice in loacl storage
  useEffect(() => {
    const getThemeName = dark ? "dark" : "light";
    document.body.setAttribute("color-scheme", getThemeName);
    localStorage.setItem("color-scheme", getThemeName);
  }, [dark]);
  return (
    <Router>
      <div>
        <nav>
          <div id="logo">
            <img
              id="logo-img"
              src="http://images.squarespace-cdn.com/content/v1/575a4be11d07c0bf790b5435/1508479278990-QF723IGHD2T8IHMCJ7RS/vz-backfinal.png"
              alt="Vibezz Chaser Logo"
            />
          </div>
          <div id="heading-div">
            <h3 id="nav-heading">Chaser</h3>
          </div>
          <NavLink to="/" exact activeClassName="home">
            Home
          </NavLink>
          <NavLink to="/artists" exact activeClassName="artists">
            Artists
          </NavLink>
          <NavLink to="/cities" exact activeClassName="cities">
            Cities
          </NavLink>
          <input
            type="checkbox"
            id="toggle"
            class="offscreen"
            onClick={() => setDark(!dark)}
          />
          <label for="toggle" class="switch"></label>
        </nav>

        <Switch>
          <Route path="/SearchResults">
            <SearchResults query={query} />
          </Route>
          <Route path="/artists">
            <ArtistsPage dark={dark} />
          </Route>
          <Route path="/cities">
            <CitiesPage dark={dark} />
          </Route>
          <Route exact path="/">
            <Homepage submitSearch={(query) => setQuery(query)} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
