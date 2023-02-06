const RequestMethod = {
	get: "get",
	post: "post",
	put: "put",
	patch: "patch",
	delete: "delete"
};

const messages = {
	all: {
		success: "Get all rows successful",
		error: "Get all rows fail"
	},
	create: {
		success: "Create successful",
		error: "Create fail"
	},
	show: {
		success: "Get row successful",
		error: "Get row fail"
	},
	update: {
		success: "Update successful",
		error: "Update fail"
	},
	delete: {
		success: "Delete success",
		error: "Delete fail"
	}
};

const routerBasic = {
	all(tableName = "accounts") {
		return {
			path: `/api/${tableName}/all`,
			method: RequestMethod.get,
			func(request, response, queryData) {
				const queryString = `SELECT * FROM ${tableName}`;

				queryData(queryString, (error, rows, fields) => {
					if (error) {
						console.log(error.message);
						response.status(400).json({ success: false, message: messages.all.error });
					} else {
						response.status(200).json({ success: true, message: messages.all.success, data: rows });
					}
				});
			},
		};
	},
	create(tableName = "accounts") {
		return {
			path: `/api/${tableName}/create`,
			method: RequestMethod.post,
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
						response.status(400).json({ success: false, message: messages.create.error });
					} else {
						response.status(200).json({ success: true, message: messages.create.success, data: { id: rows.insertId } });
					}
				});
			},
		};
	},
	show(tableName = "accounts") {
		return {
			path: `/api/${tableName}/:id/show`,
			method: RequestMethod.get,
			func(request, response, queryData) {
				const { id } = request.params;
				const queryString = `SELECT * FROM ${tableName} WHERE id=${id}`;

				queryData(queryString, (error, rows, fields) => {
					if (error) {
						console.log(error.message);
						response.status(400).json({ success: false, message: messages.show.error });
					} else {
						response.status(200).json({ success: true, message: messages.show.success, data: rows });
					}
				});
			}
		};
	},
	update(tableName = "accounts") {
		return {
			path: `/api/${tableName}/:id/update`,
			method: RequestMethod.patch,
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
						response.status(400).json({ success: false, message: messages.update.error });
					} else {
						response.status(200).json({ success: true, message: messages.update.success });
					}
				});
			}
		};
	},
	delete(tableName = "accounts") {
		return {
			path: `/api/${tableName}/:id/delete`,
			method: RequestMethod.delete,
			func(request, response, queryData) {
				const { id } = request.params;
				const queryString = `DELETE FROM ${tableName} WHERE id=${id}`;

				queryData(queryString, (error, rows, fields) => {
					if (error) {
						console.log(error.message);
						response.status(400).json({ success: false, message: messages.delete.error });
					} else {
						response.status(200).json({ success: true, message: messages.delete.success });
					}
				});
			}
		};
	}
};

module.exports = {
	RequestMethod, routerBasic
};