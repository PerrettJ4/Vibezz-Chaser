import "./index.css";

export default function ListItem({
  artist,
  date,
  arrivalCity,
  originCity,
  departureTime,
  arrivalTime,
  originCode,
  arrivalCode,
  carrier,
  carrierCode,
  venue,
  concertPrice,
  hotelPrice,
  venueImage,
}) {
  function ifNoFlight(carrierInfo, departureTime, carrierCodeOperator) {
    if (carrierInfo) {
      const flightInfo = `${originCity} to ${arrivalCity} at ${departureTime} with ${carrierInfo} ${carrierCodeOperator}, arrival at ${arrivalTime}`;
      return flightInfo;
    } else {
      return `Sorry no flights for this show`;
    }
  }

  function packages(price1, price2) {
    if (hotelPrice && concertPrice) {
      const packageInfo = `Packages from £${price1 + price2} `;
      return packageInfo;
    } else {
      return "";
    }
  }

  return (
    <div className="tour-item-container">
      <div className="tour-item">
        <p>
          {`Date: `}
          {
            <span
              style={{ color: "#158001", fontWeight: "bold" }}
            >{`${date}`}</span>
          }
          {` Artist: `}
          {
            <span
              style={{ color: "#158001", fontWeight: "bold" }}
            >{`${artist}`}</span>
          }{" "}
          {`Playing in `}
          {
            <span
              style={{ color: "#158001", fontWeight: "bold" }}
            >{`${arrivalCity}`}</span>
          }{" "}
          {`at `}
          {
            <span
              style={{ color: "#158001", fontWeight: "bold" }}
            >{`${venue}`}</span>
          }
        </p>
        <div className="the-flight">
          <div className="city-container">{arrivalCode}</div>
          <div className="span-placement">
            <div className="big-line"></div>
          </div>
          <div className="city-container">{originCode}</div>
        </div>
        <img className="venue-image" src={venueImage} alt="venue" />
        <div className="tour-package-info">
          <p className="tour-package-info-text">{`${ifNoFlight(
            carrier,
            departureTime,
            carrierCode
          )}`}</p>
        </div>
        <div className="tour-package-info">
          <p className="tour-package-info-text">
            {`${packages(concertPrice, hotelPrice)}`}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
