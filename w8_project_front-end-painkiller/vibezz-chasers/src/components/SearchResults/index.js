import "./index.css";
import ListItem from "../ListItem";
import Hotel from "../Hotels";
import Button from "../Button";
import { useEffect, useState } from "react";
import {
  PAINKILLERS_MAN,
  NICKLEBACK_EDI,
  WASEEM_PVG,
} from "../../libs/saved_data";

// document.querySelector("#plot1").style.gridArea = `${newLat} / ${newLong} / ${
//   newLat + 2
// } / ${newLong + 2}`;

// const airports = {
//   Birmingham: "BHX",
//   Manchester: "MAN",
//   Edinburgh: "EDI",
//   London: "LHR",
// };
export default function SearchResults({ query }) {
  console.log("Query passing into ListItem: ", query);
  const [tours, setTours] = useState([]);
  //  Paths here for Dev use:
  //  https://vibezz-chaser.herokuapp.com
  //  http://localhost:3000/

  // console.log("departure airport code", airports[query[1]]);
  // useEffect(() => {
  //   fetch(
  //     `https://vibezz-chaser.herokuapp.com/concerts?artist=${
  //       query[0]
  //     }&departureAirport=${airports[query[1]]}`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       const array = [...data.payload];
  //       setTours(array);
  //     });
  // }, [query]);

  useEffect(() => {
    query[0].toLowerCase() === "the painkillers"
      ? setTours(PAINKILLERS_MAN)
      : query[0].toLowerCase() === "nickleback"
      ? setTours(NICKLEBACK_EDI)
      : query[0].toLowerCase() === "waseem"
      ? setTours(WASEEM_PVG)
      : setTours(PAINKILLERS_MAN);
  }, [query]);
  console.log(tours);

  // Filtering/Seperating out concerts which have no flights/have flights
  const flightTours = tours.filter((tour) => tour.carrier.data !== "N/A");
  const flightlessTours = tours.filter((tour) => tour.carrier.data === "N/A");

  console.log("query passing through SearchResults: ", query);
  const [hotel, setHotel] = useState({
    a: "We have great deals on hotels",
    b: "",
    c: "Click to see our prices",
    d: "Check out what else you can see",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    w: "",
    x: "",
    y: "",
    z: "",
  });

  function renderHotels(
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
    lat
  ) {
    console.log("SEARCH RESULTS - HOTEL NAME: ", hotelName);
    setHotel({
      a: hotelName,
      b: hotelImage,
      c: hotelPrice,
      d: landmark,
      e: landmarkImage,
      f: date,
      g: venueName,
      h: venueImage,
      i: artist,
      j: concertPrice,
      k: originCity,
      l: arrivalCity,
      m: airportName,
      n: coutry,
      o: originCode,
      p: arrivalCode,
      q: departureTime,
      r: arrivalTime,
      s: carrier,
      t: carrierCode,
      u: lowCost,
      v: hotelAddress,
      w: concertStartTime,
      x: concertEndTime,
      y: long,
      z: lat,
    });
    console.log("BUTTON CLICKED");
    console.log("hotel", hotel);
    console.log(tours.filter((tour) => tour.concert.country === "Brazil"));
  }

  return (
    tours.length && (
      <>
        <div className="results-title">
          <div id="space-filler1"></div>
          <div className="artist-header-div">
            <h1 className="artist-header">{`${query[0]} Tour Dates`}</h1>
          </div>
          <div className="artist-image-div">
            <img
              className="artist-image"
              src={`${tours[0].concert.artist_imgurl}`}
              alt="portrait of the artist"
            />
          </div>
        </div>
        <div className="results">
          {flightTours.map((tour) => {
            return (
              <div className="single-tour">
                <ListItem
                  date={tour.concert.date}
                  venue={tour.concert.venue_name}
                  artist={tour.concert.artist_name}
                  originCity={query[1]}
                  arrivalCity={tour.concert.city}
                  originCode={tour.flight.arrival.airport.iata}
                  arrivalCode={tour.flight.departure.airport.iata}
                  departureTime={tour.flight.departure.passengerLocalTime}
                  arrivalTime={tour.flight.arrival.passengerLocalTime}
                  carrier={tour.carrier.carr_name}
                  carrierCode={tour.flight.carrierCode.iata}
                  concertPrice={parseInt(tour.concert.concert_price)}
                  hotelPrice={tour.concert.hotel_price}
                  venueImage={tour.concert.venue_imgurl}
                ></ListItem>

                <Button
                  class="list-item-button"
                  buttonText="Learn More"
                  handleClick={(e) => {
                    console.log(e);
                    e.nativeEvent.path[3].children[3].style.display = "block";
                    e.nativeEvent.path[3].children[3].children[0].children[2].children[3].children[0].style.gridArea = `${Math.floor(
                      Number(tour.airport.lat) + 90
                    )} / ${Math.floor(
                      Number(tour.airport.long) + 90
                    )} / ${Math.floor(
                      Number(tour.airport.lat) + 92
                    )} / ${Math.floor(Number(tour.airport.long) + 92)}`;
                    renderHotels(
                      tour.concert.hotel_name,
                      tour.concert.hotel_imgurl,
                      tour.concert.hotel_price,
                      tour.concert.landmarks,
                      tour.concert.landmark_imgurl,
                      tour.concert.date,
                      tour.concert.venue_name,
                      tour.concert.venue_imgurl,
                      tour.concert.artist_name,
                      parseInt(tour.concert.concert_price),
                      query[1],
                      tour.concert.city,
                      tour.airport.port_name,
                      tour.concert.country,
                      tour.flight.arrival.airport.iata,
                      tour.flight.departure.airport.iata,
                      tour.flight.departure.passengerLocalTime,
                      tour.flight.arrival.passengerLocalTime,
                      tour.carrier.carr_name,
                      tour.flight.carrierCode.iata,
                      tour.carrier.low_cost,
                      tour.concert.hotel_address,
                      tour.concert.starttime,
                      tour.concert.endtime,
                      tour.airport.long,
                      tour.airport.lat
                    );
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="extras">
          <Hotel
            hotelName={hotel.a}
            hotelImage={hotel.b}
            hotelPrice={hotel.c}
            landmark={hotel.d}
            landmarkImage={hotel.e}
            date={hotel.f}
            venueName={hotel.g}
            venueImage={hotel.h}
            artist={hotel.i}
            concertPrice={hotel.j}
            originCity={hotel.k}
            arrivalCity={hotel.l}
            airportName={hotel.m}
            coutry={hotel.n}
            originCode={hotel.o}
            arrivalCode={hotel.p}
            departureTime={hotel.q}
            arrivalTime={hotel.r}
            carrier={hotel.s}
            carrierCode={hotel.t}
            lowCost={hotel.u}
            hotelAddress={hotel.v}
            concertStartTime={hotel.w}
            concertEndTime={hotel.x}
            long={hotel.y}
            lat={hotel.z}
          />
        </div>
        <div className="sorry-div">
          <h2 className="sorry"> Sorry we have no flights for these dates</h2>
        </div>
        <div className="no-flights">
          {flightlessTours.map((tour) => {
            return (
              <>
                <ListItem
                  date={tour.concert.date}
                  venue={tour.concert.venue_name}
                  artist={tour.concert.artist_name}
                  originCity={query[1]}
                  arrivalCity={tour.concert.city}
                  venueImage={tour.concert.venue_imgurl}
                />
              </>
            );
          })}
        </div>
      </>
    )
  );
}
