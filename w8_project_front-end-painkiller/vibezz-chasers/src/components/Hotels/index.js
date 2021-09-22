import "./hotels.css";

// function map(num) {
//   return Math.floor(Number(num));
// }

export default function Hotel({
  hotelName,
  hotelImage,
  hotelPrice,
  landmark,
  landmarkImage,
  date,
  venueName,
  venueImage,
  artist,
  concertPrice,
  originCity,
  arrivalCity,
  airportName,
  coutry,
  originCode,
  arrivalCode,
  departureTime,
  arrivalTime,
  carrier,
  carrierCode,
  lowCost,
  hotelAddress,
  concertStartTime,
  concertEndTime,
  long,
  lat,
  long2,
  lat2,
}) {
  console.log(
    hotelName,
    hotelImage,
    hotelPrice,
    landmark,
    landmarkImage,
    date,
    venueName,
    venueImage,
    artist,
    concertPrice,
    originCity,
    arrivalCity,
    airportName,
    coutry,
    originCode,
    arrivalCode,
    departureTime,
    arrivalTime,
    carrier,
    carrierCode,
    lowCost,
    hotelAddress,
    concertStartTime,
    concertEndTime,
    long,
    lat,
    long2,
    lat2
  );

  return (
    <div className="extras-item">
      <div className="selected-hotel">
        <div>
          <h3 className="hotel name">{`${hotelName}`}</h3>
        </div>
        <div>
          <h4 classname="hotel address" id="h4-bob">{`${hotelAddress}`}</h4>
        </div>
        <div>
          <p className="hotel price">{`Prices starting from £${hotelPrice}`}</p>
        </div>
        <div>
          <img
            className="hotel image"
            src={hotelImage}
            alt="showing the user the hotel"
          />
        </div>
      </div>
      <div className="selected-landmark">
        <h3 className="landmarkstuff">{`${arrivalCity} , ${coutry}`}</h3>
        <h4 className="landmarkstuff" id="h4-bob">
          Other local attractions include...
        </h4>
        <p className="landmarkstuff">{`${landmark}`}</p>
        <img
          className="landmarkstuff"
          src={landmarkImage}
          alt="showing the user local attractions"
        />
      </div>
      <div className="selected-flight">
        <div className="the-flight">
          <div className="city-container">{arrivalCode}</div>
          <div className="span-placement">
            <div className="big-line"></div>
          </div>
          <div className="city-container">{originCode}</div>
        </div>
        <div className="times">
          <div className="time"></div>
          {departureTime}
          <div id="spacer2">{carrier}</div>
          <div className="time">{arrivalTime}</div>
        </div>
        <div className="lat-long">
          {lat2} - {long2}
        </div>
        <div id="my-map">
          <div
            id="plot1"
            style={{
              gridArea: `${Math.floor(Number(-lat) + 113)} / ${Math.floor(
                Number(long) + 180
              )} / ${Math.floor(Number(-lat) + 116)} / ${Math.floor(
                Number(long) + 186
              )}`,
            }}
          ></div>
          <div
            id="plot2"
            style={{
              gridArea: `${Math.floor(Number(-lat2) + 113)} / ${Math.floor(
                Number(long2) + 180
              )} / ${Math.floor(Number(-lat2) + 116)} / ${Math.floor(
                Number(long2) + 186
              )}`,
            }}
          ></div>
          <div
            id="plot3"
            style={{
              gridArea: `88 / 178 / 92 / 182`,
            }}
          ></div>
          <div id="item1"></div>
        </div>
      </div>
      <div className="selected-concert">
        <div id="concert-header-div">
          <h3 className="concert-stuff">{artist}</h3>
        </div>
        <h4 className="concert-stuff" id="h4-bob">
          {`${venueName}    £${concertPrice}`}
        </h4>
        <div>{`${concertStartTime} to ${concertEndTime}`}</div>
        <img
          className="concert-image"
          src={venueImage}
          alt="Venue for the gig"
        />
      </div>
    </div>
  );
}
