const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hust",
});

const connectionState = {
  connected: "authenticated",
  disconnected: "disconnect",
};

function connectDatabase() {
  connection.connect(function (error) {
    if (error) {
      console.log(error);
    }
  });
}

function disconnectDatabase() {
  connection.end(function (error) {
    if (error) {
      console.log(error);
    }
  });
}

function checkConnection() {
  return connection.state === connectionState.connected;
}

function queryData(query = "", callback = (error, rows, fields) => {}) {
  connection.query(query, callback);
}

module.exports = {
  connectDatabase,
  disconnectDatabase,
  queryData,
  checkConnection,
};
