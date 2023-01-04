const HttpMethod = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

const routerBasic = {
  all(tableNames = "users") {
    return {
      path: `/api/${tableNames}/all`,
      method: HttpMethod.get,
      func(request, response, queryData) {
        const queryString = `SELECT * FROM ${tableNames}`;

        queryData(queryString, (error, rows, fields) => {
          if (error) {
            console.log(error.message);
          } else {
            response.json(rows);
          }
        });
      },
    };
  },
  create(tableNames = "users") {
    return {
      path: `/api/${tableNames}/create`,
      method: HttpMethod.post,
      func(request, response, queryData) {
        const data = request.body;
        const keys = Object.keys(data);
        const values = Object.values(data).map((value) => {
          return (typeof value === "string") ? (`'${value}'`) : value;
        });
        const queryString = `INSERT INTO ${tableNames}(${keys.join(",")}) VALUES (${values.join(",")})`;

        queryData(queryString, (error, rows, fields) => {
          if (error) {
            console.log(error.message);
          } else {
            response.status(200).json({ message: "Create success" });
          }
        });
      },
    };
  },
  show(tableNames = "users") {
    return {
      path: `/api/${tableNames}/:id/show`,
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
      }
    };
  },
  update(tableNames = "users") {
    return {
      path: `/api/${tableNames}/:id/update`,
      method: HttpMethod.put,
      func(request, response, queryData) {
        const { id } = request.params;
        const data = request.body;
        const keys = Object.keys(data);
        const values = Object.values(data).map((value) => {
          return (typeof value === "string") ? (`'${value}'`) : value;
        });
        const queryString = `UPDATE ${tableNames} SET ${keys.map(((key, index) => {
          return `${key}=${values[index]}`;
        })).join(",")} WHERE id=${id}`;

        queryData(queryString, (error, rows, fields) => {
          if (error) {
            console.log(error.message);
          } else {
            response.status(200).json({ message: "Update success" });
          }
        });
      }
    };
  },
  delete(tableNames = "users") {
    return {
      path: `/api/${tableNames}/:id/delete`,
      method: HttpMethod.delete,
      func(request, response, queryData) {
        const { id } = request.params;
        const queryString = `DELETE FROM ${tableNames} WHERE id=${id}`;

        queryData(queryString, (error, rows, fields) => {
          if (error) {
            console.log(error.message);
          } else {
            response.status(200).json({ message: "Delete success" });
          }
        });
      }
    };
  }
};

const routers = [
  routerBasic.all("users"),
  routerBasic.create("users"),
  routerBasic.show("users"),
  routerBasic.update("users"),
  routerBasic.delete("users")
];

function routerConfig(app, queryData, checkConnection) {
  routers.forEach((router) => {
    app[router.method](router.path, (request, response) => {
      if (checkConnection()) {
        router.func(request, response, queryData);
      } else {
        response.status(400).json({
          message: "Connect database failure",
        });
      }
    });
  });
}

module.exports = {
  routerConfig,
};
