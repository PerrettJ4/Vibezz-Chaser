const { query } = require("../../index");
const airlineData = require("./airline.json");

async function populateTable() {
  const sqlQuery =
    "INSERT INTO airlines (carr_iata, carr_name, carr_country, carr_state, cargo_ind, iata_ind, low_cost) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;";

  for (let a of airlineData) {
    const response = await query(sqlQuery, [
      a.IATA_CD,
      a.CARR_NAME,
      a.COUNTRY,
      a.STATE,
      a.CARGO_IND,
      a.IATA_IND,
      a.LOW_COST,
    ]);
  }
  console.log("airlines table populated.");
}

if (require.main === module) {
  populateTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = populateTable;
