const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hust",
});

const connectionState = {
  connected: "authenticated",
  disconnected: "disconnected"
};

function connectDatabase() {
  connection.connect();
}

function disconnectDatabase() {
  connection.end();
}

function checkConnection() {
  return connection.state === connectionState.connected;
}

function queryData(query = "", callback = (error, rows, fields) => { }) {
  connection.query(query, callback);
}

module.exports = {
  connectDatabase,
  disconnectDatabase,
  checkConnection,
  queryData,
};
