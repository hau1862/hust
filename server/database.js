const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hust",
});

async function queryData(query = "", callback = (error, rows, fields) => {}) {
  await connection.connect();
  await connection.query(query, callback);
  await connection.end();
}

module.exports = {
  queryData,
};
