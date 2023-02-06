const express = require("express");
const { routerConfig } = require("./router");
const { queryData, connectDatabase, disconnectDatabase, checkConnection } = require("./database/connect");
const { allowAccessMiddleware } = require("./middleware/allow-access");

const app = express();
const serverPort = 8000;

app.use(allowAccessMiddleware)
	.use(express.json());

routerConfig(app, queryData, checkConnection);

app.on("close", function () {
	disconnectDatabase();
}).listen(serverPort, function () {
	connectDatabase();
	console.log(`Server is running on http://localhost:${serverPort}`);
});
