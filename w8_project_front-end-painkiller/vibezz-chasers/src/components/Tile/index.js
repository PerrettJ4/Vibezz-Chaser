import "./index.css";

export default function Tile({
  artistName,
  artistImg,
  gridArea,
  country,
  landmark,
  dark,
  identifier,
}) {
  return (
    <div
      id={`con`}
      className={`tile-container ${gridArea}`}
      style={{ backgroundColor: `${dark ? "" : "#66999b"}` }}
    >
      {/* #66999b, #e7efc5 */}{" "}
      <div className="img-div">
        <img src={artistImg} alt={artistName} id={`${identifier}`} />
      </div>
      <div className="card-title">
        <h2 className={identifier}>{artistName}</h2>
      </div>
      <div>
        <h3 className={identifier}>{country}</h3>
      </div>
      <div>
        <h4 className={identifier}>{landmark} </h4>
      </div>
    </div>
  );
}

// recive props from parent
// display in a nice way
