import "./index.css";
import { useState, useEffect } from "react";
import Tile from "../Tile";

const gridAreas = ["a", "b", "c", "d", "e", "f"];

export default function CitiesPage({ dark }) {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch(`https://vibezz-chaser.herokuapp.com/concerts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const array = [...data.payload];
        setCities(array.slice(0, 6));
      });
  }, []);
  console.log(cities);
  return (
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
