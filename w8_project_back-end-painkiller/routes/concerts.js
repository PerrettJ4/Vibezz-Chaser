const express = require("express");
const router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const {
  delConcert,
  addConcert,
  getAllConcerts,
  getConcertByArtist,
  getAirportByAirportIata,
  getAirlineByCarrierIata,
} = require("../models/concerts");

router.get("/", async (req, res) => {
  const { artist, departureAirport } = req.query;
  if (artist && departureAirport) {
    const concertData = await getConcertByArtist(artist);
    const airportData = await getAirportByAirportIata(departureAirport);

    let tourData = [];
    // the data we want is data.city, data.country, data.venue_name, data.airport_code
    for (i in concertData) {
      const city = concertData[i].city;
      const country = concertData[i].country;
      const venue = concertData[i].venue_name;
      const arrivalAirport = concertData[i].airport_code;
      const departureDate = concertData[i].date;
      console.log(
        "QUERY PARAMS: ",
        departureAirport,
        arrivalAirport,
        departureDate
      );
      if (departureAirport && arrivalAirport && departureDate) {
        console.log(
          "searching...",
          departureAirport,
          arrivalAirport,
          departureDate
        );
        let fetch_response = await fetch(
          `https://api.oag.com/flights/?DepartureAirport=${departureAirport}&ArrivalAirport=${arrivalAirport}&DepartureDate=${departureDate}&Limit=1`,
          {
            headers: {
              "Cache-Control": "max-age=600",
              "Subscription-Key": process.env.API_KEY,
            },
          }
        );
        const flightData = await fetch_response.json();

        // initialising carrier data incase no flight data :)
        let carrierData = [{ data: "N/A" }];
        // if flight data exist we go look for our airline carrier!
        if (flightData.data.length === 1) {
          const carrierCode = flightData.data[0].carrierCode.iata;
          carrierData = await getAirlineByCarrierIata(carrierCode);
          console.log(
            "FLIGHT DATA!",
            "CARRIER CODE: ",
            carrierCode,
            "CARRIER DATA: ",
            carrierData
          );
        }
        // console.log(flightData.data);
        tourData.push({
          concert: { ...concertData[i] },
          flight: { ...flightData.data[0] },
          airport: { ...airportData[0] },
          carrier: { ...carrierData[0] },
        });
      }
    }
    res.json({
      success: true,
      message: `Here are the details for the first gig from ${artist}.`,
      payload: tourData,
    });
    return;
  }

  const data = await getAllConcerts();
  res.json({
    success: true,
    message: "Here are all concerts",
    payload: data,
  });
  return;
});

router.post("/", async (req, res) => {
  const {} = req.body;
  const data = await addConcert();

  res.json({ sucess: true, payload: data.rows });
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  const data = await delConcert(id);
  res.json({
    success: true,
    message: `${id} has been deleted`,
    payload: data,
  });
});

module.exports = router;
