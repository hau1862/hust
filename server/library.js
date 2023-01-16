function allowAccessMiddleware(request, response, next) {
  const headerConfig = [
    { key: "Access-Control-Allow-Origin", value: "*" },
    { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, PATCH, DELETE" },
    { key: "Access-Control-Allow-Headers", value: "X-Requested-With, Content-Type" },
    { key: "Access-Control-Allow-Credentials", value: true }
  ];

  headerConfig.forEach(function (config) {
    response.setHeader(config.key, config.value);
  });

  next();
}

module.exports = {
  allowAccessMiddleware,
};
