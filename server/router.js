const HTTPMethod = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

const routers = [
  {
    path: "/",
    method: HTTPMethod.get,
    func: (request, response, queryData) => {
      queryData("SELECT * FROM users", (error, rows, fields) => {
        if (error) {
          console.log(error.message);
        } else {
          response.json(rows);
        }
      });
    },
  },
];

function routerConfig(app, queryData) {
  routers.forEach((router) => {
    app[router.method](router.path, (request, response) => {
      router.func(request, response, queryData);
    });
  });
}

module.exports = {
  routerConfig,
};
