import "./index.css";
import { useState, useEffect } from "react";
import Tile from "../Tile";

const gridAreas = ["a", "b", "c", "d", "e", "f"];

export default function CitiesPage({ dark }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //  Paths here for Dev use:
  //  https://vibezz-chaser.herokuapp.com
  //  http://localhost:3000/

  useEffect(() => {
    const getCities = async (url) => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        setCities(json.payload.splice(0, 6));
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCities(`https://vibezz-chaser.herokuapp.com/concerts`);
  }, []);

  console.log(cities);

  return isLoading ? (
    <div id="loading">
      <h1>Fetching Cities!</h1>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : isError ? (
    <div id="error">
      <h1>
        Apologies, we are currently having issues connecting with our database
      </h1>
      <img
        src="https://c.tenor.com/5plaXY9f1uAAAAAj/dino-dinosaur.gif"
        alt="sad-dino"
        style={{ opacity: "50%", marginTop: "50px" }}
      ></img>
    </div>
  ) : (
    <main className="ArtistsPage">
      <header className="cities-header">
        <h1 className="cities-title">Cities</h1>
      </header>
      {cities.map((concert, index) => {
        return (
          <Tile
            identifier="cities-img"
            key={index}
            country={concert.country}
            artistName={concert.city}
            landmark={concert.landmarks}
            artistImg={concert.landmark_imgurl}
            gridArea={gridAreas[index]}
            dark={dark}
          />
        );
      })}
    </main>
  );
}
