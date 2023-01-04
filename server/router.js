const HttpMethod = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

const routers = [
  {
    path: "/api/users/all",
    method: HttpMethod.get,
    func(request, response, queryData) {
      const queryString = "SELECT * FROM users";

      queryData(queryString, (error, rows, fields) => {
        if (error) {
          console.log(error.message);
        } else {
          response.json(rows);
        }
      });
    },
  },
  {
    path: "/api/users/:id",
    method: HttpMethod.get,
    func(request, response, queryData) {
      const { id } = request.params;
      const queryString = `SELECT * FROM users WHERE id=${id}`;

      queryData(queryString, (error, rows, fields) => {
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
        request.status(400).json({
          message: "Connect database failure",
        });
      }
    });
  });
}

module.exports = {
  routerConfig,
};
