const logRequest = (req, res, next) => {
  console.log(`Request ${req.method} ${req.url} ${req.path}`);
  next();
};
const logRequestDateTime = (req, res, next) => {
  console.log(`Request ${req.method} ${req.url} ${new Date()}`);
  next();
};

module.exports = {
  logRequest,
  logRequestDateTime,
};
