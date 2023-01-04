const express = require("express");
const { serverPort } = require("./constants");
const { routerConfig } = require("./router");
const { queryData, connectDatabase, disconnectDatabase, checkConnection } = require("./database");
const { allowAccessMiddleware } = require("./library");

const app = express();

routerConfig(app, queryData, checkConnection);

app.use(allowAccessMiddleware)
  .on("close", function () {
    disconnectDatabase();
  })
  .listen(serverPort, function () {
    connectDatabase();
    console.log(`Server is running on http://localhost:${serverPort}`);
  });
