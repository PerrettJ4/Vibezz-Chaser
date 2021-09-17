const { query } = require("../../index");
const dummyTourData = require("../../../concertData");
// ("CREATE TABLE IF NOT EXISTS concerts (id SERIAL PRIMARY KEY, city TEXT NOT NULL, country TEXT, venue_name TEXT NOT NULL, venue_imgurl TEXT NOT NULL, landmarks TEXT NOT NULL, landmark_imgurl TEXT NOT NULL, airport_name TEXT NOT NULL, airport_code TEXT NOT NULL, hotel_name TEXT NOT NULL, hotel_address TEXT, hotel_imgurl TEXT NOT NULL, hotel_price INTEGER NOT NULL, artist_name TEXT NOT NULL, artist_imgurl TEXT NOT NULL, date TEXT NOT NULL, startTime TEXT NOT NULL, endTime TEXT NOT NULL, concert_price TEXT NOT NULL);");
async function populateTable() {
  const sqlQuery =
    "INSERT INTO concerts (city, country, venue_name, venue_imgurl, landmarks, landmark_imgurl, airport_name, airport_code, hotel_name, hotel_address, hotel_imgurl, hotel_price, artist_name, artist_imgurl, date, startTime, endTime, concert_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *;";
  console.log(dummyTourData[0]);
  for (let c of dummyTourData) {
    const response = await query(sqlQuery, [
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
    ]);

    // for (i in dummyTourData) {
    //   console.log(
    //     response.rows[i].concert.artist.name,
    //     response.rows[i].venue.city,
    //     response.rows[i].concert.date,
    //     response.rows[i].hotel.name + "inserted into table."
    //   );
    // }
    // console.log(`${response.rows[0].title} inserted into table.`);
  }
  console.log("concerts table populated.");
}

if (require.main === module) {
  populateTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = populateTable;
