const { query } = require("../../index");
const airportData = require("./airport.json");

async function populateTable() {
  const sqlQuery =
    "INSERT INTO airports (port_iata, port_name, lat, long, city_name) VALUES ($1, $2, $3, $4, $5) RETURNING *;";

  for (let a of airportData) {
    const response = await query(sqlQuery, [
      a.PORT_IATA,
      a.PORT_NAME,
      a.LAT_DEC,
      a.LONG_DEC,
      a.CITY_NAME,
    ]);
  }
  console.log("airports table populated.");
}

if (require.main === module) {
  populateTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = populateTable;
