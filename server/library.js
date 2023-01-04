const allowDomains = ["http://localhost:5500", "http://localhost:3000"];
const allowMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
const allowHeaders = ["X-Requested-With", "Content-Type"];

function allowAccessMiddleware(request, response, next) {
  response.setHeader("Access-Control-Allow-Origin", allowDomains.join(", "));
  response.setHeader("Access-Control-Allow-Methods", allowMethods.join(", "));
  response.setHeader("Access-Control-Allow-Headers", allowHeaders.join(", "));
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
}

module.exports = {
  allowAccessMiddleware
};
