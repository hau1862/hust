const allowDomains = "http://localhost:5500";
const allowMethods = "GET, POST, PUT, PATCH, DELETE";
const allowHeaders = "X-Requested-With, Content-Type";

function allowAccessMiddleware(request, response, next) {
  response.setHeader("Access-Control-Allow-Origin", allowDomains);
  response.setHeader("Access-Control-Allow-Methods", allowMethods);
  response.setHeader("Access-Control-Allow-Headers", allowHeaders);
  response.setHeader("Access-Control-Allow-Credentials", true);

  next();
}

module.exports = {
  allowAccessMiddleware,
};
