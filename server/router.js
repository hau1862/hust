const HTTPMethod = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

const routers = [
  {
    path: "/users",
    method: HTTPMethod.get,
    query: "SELECT * FROM users",
    func(request, response, queryData) {
      queryData(this.query, (error, rows, fields) => {
        if (error) {
          console.log(error.message);
        } else {
          response.json(rows);
        }
      });
    },
  },
];

function routerConfig(app, queryData, checkConnection) {
  routers.forEach((router) => {
    app[router.method](router.path, (request, response) => {
      if (checkConnection()) {
        router.func(request, response, queryData);
      } else {
        response.status(400).json({ message: "Connection is disconnected" });
      }
    });
  });
}

module.exports = {
  routerConfig,
};
