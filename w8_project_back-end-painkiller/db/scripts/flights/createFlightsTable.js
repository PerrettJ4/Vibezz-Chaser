const { query } = require("../../index");
async function createTable() {
  const sqlQuery =
    "CREATE TABLE IF NOT EXISTS flights(id SERIAL PRIMARY KEY, carrier_iata TEXT NOT NULL, carr_name TEXT NOT NULL, carr_lowcost BOOLEAN, departure_iata TEXT NOT NULL, departure_time TEXT NOT NULL, arrival_iata TEXT NOT NULL, arrival_time TEXT NOT NULL, aircraft_type TEXT, interval-days INTEGER, operation_days TEXT ARRAY,  auto_checkin BOOLEAN, elec_ticketing BOOLEAN);";

  const response = await query(sqlQuery);
  consle.log("flights table created");
}
if (require.main === module) {
  createTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = createTable;
