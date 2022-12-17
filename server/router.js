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
    func: (request, response) => {
      response.send("Hello Hust");
    },
  },
];

function routerConfig(app) {
  routers.forEach((router) => {
    app[router.method](router.path, router.func);
  });
}

module.exports = {
  routerConfig,
};
