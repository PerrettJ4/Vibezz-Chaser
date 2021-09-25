import "./index.css";
import { useEffect, useState } from "react";
import Tile from "./../Tile";

const gridAreas = ["a", "b", "c", "d", "e", "f"];

export default function ArtistsPage({ dark }) {
  const [concerts, setConcerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //  Paths here for Dev use:
  //  https://vibezz-chaser.herokuapp.com
  //  http://localhost:3000/

  useEffect(() => {
    const getConcerts = async (url) => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        setConcerts(json.payload.splice(0, 6));
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getConcerts(`https://vibezz-chaser.herokuapp.com/concerts`);
  }, []);

  console.log(concerts);

  return isLoading ? (
    <div id="loading">
      <h1>Fetching Artists!</h1>
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
  );
}
