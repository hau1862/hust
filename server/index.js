const express = require("express");
const app = express();
const { serverPort } = require("./constants");
const { routerConfig } = require("./router");
const {
  queryData,
  connectDatabase,
  disconnectDatabase,
  checkConnection,
} = require("./database");
const { allowCrossDomain } = require("./library");

routerConfig(app, queryData, checkConnection);

app
  .use(allowCrossDomain)
  .listen(serverPort, function () {
    connectDatabase();
    console.log(`Server is running on http://localhost:${serverPort}`);
  })
  .on("close", function () {
    disconnectDatabase();
  });
