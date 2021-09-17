const express = require("express");
// const { getAllFlights } = require("../models/flights");
const router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.get("/", async (req, res) => {
  const { DepartureAirport, ArrivalAirport, DepartureDate } = req.query;
  if (DepartureAirport && ArrivalAirport && DepartureDate) {
    let fetch_response = await fetch(
      `https://api.oag.com/flights/?DepartureAirport=${DepartureAirport}&ArrivalAirport=${ArrivalAirport}&DepartureDate=${DepartureDate}&Limit=2`,
      {
        headers: {
          "Cache-Control": "max-age=600",
          "Subscription-Key": process.env.API_KEY,
        },
      }
    );
    const data = await fetch_response.json();
    res.json({
      success: true,
      message: `Here is your flights from ${DepartureAirport} to ${ArrivalAirport} on ${DepartureDate}.`,
      payload: data,
    });
    return;
  }

  let fetch_response = await fetch("https://api.oag.com/flights/?Limit=1", {
    headers: {
      "Cache-Control": "max-age=600",
      "Subscription-Key": "251562bba0704e11b8a9fad1342c6ea6",
    },
  });
  const data = await fetch_response.json();
  res.json({
    success: true,
    message: `Here is all flights`,
    payload: data,
  });
  //   return data;
});

module.exports = router;
