import Input from "../Input";
import "./homepage.css";
import React, { useState } from "react";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { Link } from "react-router-dom";

let partyActions = ["Party", "Dance", "Sing", "Rock"];
let randomNumber = Math.floor(Math.random() * 3);
// nativeEvent.path[9].children[0].children[1].children[1].children[0].children[0].style.display:
export default function Homepage(props) {
  const [searchText, setSearchText] = useState("");
  const [searchCity, setSearchCity] = useState("Birmingham");

  return (
    <div className="HomePage">
      <header className="homepage-header">
        <div>
          <h1 id="homepage-title">Vibezz Chaser</h1>
        </div>
        <div id="slogan">
          <h4 id="slogan-text"> Eat, Sleep, {partyActions[randomNumber]}</h4>
        </div>
      </header>
      <main className="homepage-main">
        <label>Where are you?</label>
        <div id="input-container">
          <Dropdown submit={setSearchCity} />
          <Input submit={setSearchText} />
          <Link
            className="submit"
            to="/SearchResults"
            onClick={(e) => {
              console.log("clicked!!!", searchText, searchCity);
              props.submitSearch([searchText, searchCity]);
            }}
          >
            <Button buttonText="Search" />
          </Link>
        </div>
      </main>
      <footer className="home-footer">
        <div className="home-content-container">
          <div className="home-content">
            <p className="home-info">Find your favourite artists gig dates!</p>
          </div>
        </div>
        <div className="home-content-container">
          <div className="home-content">
            <p className="home-info">
              Source flights the day before!<br></br>
            </p>
          </div>
        </div>
        <div className="home-content-container">
          <div className="home-content">
            <p className="home-info">
              Stay in local hotels and see famous landmarks!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// get the searchText and City up to App.js level, and pass down in to searchResults
