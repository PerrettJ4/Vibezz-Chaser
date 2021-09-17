const { query } = require("../db/index");

async function getConcertByArtist(artist) {
  const data = await query(
    "SELECT * FROM concerts WHERE artist_name = $1 order by date",
    [artist]
  );
  return data.rows;
}

async function getAllConcerts() {
  const data = await query("SELECT * FROM concerts order by date");
  return data.rows;
}

async function addConcert(
  city,
  country,
  venue_name,
  venue_imgurl,
  landmarks,
  landmark_imgurl,
  airport_name,
  airport_code,
  hotel_name,
  hotel_address,
  hotel_imgurl,
  hotel_price,
  artist_name,
  artist_imgurl,
  date,
  startTime,
  endTime,
  concert_price
) {
  const data = await query(
    "INSERT INTO concerts (city, country, venue_name, venue_imgurl, landmarks, landmark_imgurl, airport_name, airport_code, hotel_name, hotel_address, hotel_imgurl, hotel_price, artist_name, artist_imgurl, date, startTime, endTime, concert_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *;",
    [
      c.venue.city,
      c.venue.country,
      c.venue.name,
      c.venue.imgurl,
      c.venue.landmarks,
      c.venue.landmarkimgurl,
      c.venue.airport.name,
      c.venue.airport.code,
      c.hotel.name,
      c.hotel.address,
      c.hotel.imgurl,
      c.hotel.price,
      c.concert.artist.name,
      c.concert.artist.imgurl,
      c.concert.date,
      c.concert.time[0],
      c.concert.time[1],
      c.concert.price,
    ]
  );

  return data.rows;
}

async function delConcert(id) {
  const data = await query("DELETE FROM concerts WHERE id = $1;", [id]);
  return;
}

async function getAirportByAirportIata(iata) {
  const data = await query("SELECT * FROM airports WHERE port_iata = $1", [
    iata,
  ]);
  return data.rows;
}

async function getAirlineByCarrierIata(iata) {
  const data = await query("SELECT * FROM airlines WHERE carr_iata = $1", [
    iata,
  ]);
  return data.rows;
}

module.exports = {
  getConcertByArtist,
  getAllConcerts,
  addConcert,
  delConcert,
  getAirportByAirportIata,
  getAirlineByCarrierIata,
};
