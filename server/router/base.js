const ApiMethod = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

const routerBasic = {
  all(tableName = "users") {
    return {
      path: `/api/${tableName}/all`,
      method: ApiMethod.get,
      func(request, response, queryData) {
        const queryString = `SELECT * FROM ${tableName}`;

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
  create(tableName = "users") {
    return {
      path: `/api/${tableName}/create`,
      method: ApiMethod.post,
      func(request, response, queryData) {
        const data = request.body;
        const keys = Object.keys(data);
        const values = Object.values(data).map((value) => {
          return (typeof value === "string") ? (`'${value}'`) : value;
        });
        const queryString = `INSERT INTO ${tableName}(${keys.join(",")}) VALUES (${values.join(",")})`;

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
  show(tableName = "users") {
    return {
      path: `/api/${tableName}/:id/show`,
      method: ApiMethod.get,
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
  update(tableName = "users") {
    return {
      path: `/api/${tableName}/:id/update`,
      method: ApiMethod.put,
      func(request, response, queryData) {
        const { id } = request.params;
        const data = request.body;
        const keys = Object.keys(data);
        const values = Object.values(data).map((value) => {
          return (typeof value === "string") ? (`'${value}'`) : value;
        });
        const queryString = `UPDATE ${tableName} SET ${keys.map(((key, index) => {
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
  delete(tableName = "users") {
    return {
      path: `/api/${tableName}/:id/delete`,
      method: ApiMethod.delete,
      func(request, response, queryData) {
        const { id } = request.params;
        const queryString = `DELETE FROM ${tableName} WHERE id=${id}`;

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

module.exports = {
  ApiMethod, routerBasic
};