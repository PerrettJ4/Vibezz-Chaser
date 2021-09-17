const { query } = require("../../index");

async function deleteFlightsTable() {
  const sqlQuery = "DROP TABLE IF EXISTS flights";

  const _response = await query(sqlQuery);
  console.log("flights table deleted");
}

if (require.main === module) {
  deleteTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = deleteFlightsTable;
