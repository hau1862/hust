const express = require("express");
const app = express();
const { serverPort } = require("./constants");
const { routerConfig } = require("./router");
const { queryData } = require("./database");

routerConfig(app, queryData);

app.listen(serverPort, function () {
  console.log(`Server is running on http://localhost:${serverPort}`);
});
