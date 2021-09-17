/* 
Import query
Async function
Pass in SQL setting up the table and await response
Console.log when done
Call function
*/

const { query } = require("../../index");

async function createTable() {
  const sqlQuery =
    "CREATE TABLE IF NOT EXISTS concerts (id SERIAL PRIMARY KEY, city TEXT NOT NULL, country TEXT, venue_name TEXT NOT NULL, venue_imgurl TEXT NOT NULL, landmarks TEXT NOT NULL, landmark_imgurl TEXT NOT NULL, airport_name TEXT NOT NULL, airport_code TEXT NOT NULL, hotel_name TEXT NOT NULL, hotel_address TEXT, hotel_imgurl TEXT NOT NULL, hotel_price INTEGER NOT NULL, artist_name TEXT NOT NULL, artist_imgurl TEXT NOT NULL, date TEXT NOT NULL, startTime TEXT NOT NULL, endTime TEXT NOT NULL, concert_price TEXT NOT NULL);";

  const _response = await query(sqlQuery);
  console.log("concerts table created");
}

if (require.main === module) {
  createTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = createTable;
