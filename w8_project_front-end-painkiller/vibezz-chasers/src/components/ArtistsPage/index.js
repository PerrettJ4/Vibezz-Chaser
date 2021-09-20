import "./index.css";
import { useEffect, useState } from "react";
import Tile from "./../Tile";

const gridAreas = ["a", "b", "c", "d", "e", "f"];

export default function ArtistsPage({ dark }) {
  const [concerts, setConcerts] = useState([]);

  //  Paths here for Dev use:
  //  https://vibezz-chaser.herokuapp.com
  //  http://localhost:3000/

  useEffect(() => {
    fetch(`https://vibezz-chaser.herokuapp.com/concerts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const array = [...data.payload];
        setConcerts(array.splice(0, 6));
      });
  }, []);

  console.log(concerts);

  return (
    concerts.length && (
      <main className="ArtistsPage">
        <header className="artistpage-header">
          <h1 className="artist-title">Artists</h1>
        </header>

        {concerts.map((c, i) => {
          return (
            <Tile
              key={i}
              artistName={c.artist_name}
              artistImg={c.artist_imgurl}
              gridArea={gridAreas[i]}
              dark={dark}
              identifier="artist-img"
            />
          );
        })}
      </main>
    )
  );
}

// fetch concerts data from /concerts
// page display: grid -> set out our page structure
// insert <Tile/> component ->> concert data
