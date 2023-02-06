const { ApiMethod, routerBasic } = require("./base");
const tableName = "accounts";

module.exports = [
  routerBasic.all(tableName),
  routerBasic.create(tableName),
  routerBasic.show(tableName),
  routerBasic.update(tableName),
  routerBasic.delete(tableName),
];