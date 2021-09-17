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
    "CREATE TABLE IF NOT EXISTS airlines (id SERIAL PRIMARY KEY, carr_iata TEXT, carr_name TEXT, carr_country TEXT, carr_state TEXT, cargo_ind TEXT, iata_ind TEXT, low_cost TEXT);";

  const _response = await query(sqlQuery);
  console.log("airlines table created");
}

if (require.main === module) {
  createTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = createTable;
