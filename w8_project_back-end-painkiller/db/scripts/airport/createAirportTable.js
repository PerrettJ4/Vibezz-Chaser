const { query } = require("../../index");

async function createTable() {
  const sqlQuery =
    "CREATE TABLE IF NOT EXISTS airports (id SERIAL PRIMARY KEY, port_iata TEXT NOT NULL, port_name TEXT NOT NULL, lat TEXT NOT NULL, long TEXT NOT NULL, city_name TEXT NOT NULL);";

  const _response = await query(sqlQuery);
  console.log("airports table created");
}

if (require.main === module) {
  createTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = createTable;
