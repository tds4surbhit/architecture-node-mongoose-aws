const fs = require("fs");

function logReqRes(fileName) {
  fs.appendFile(
    fileName,
    `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`,
    (err, data) => {
      next();
    }
  );
}

module.exports = {
  logReqRes,
};
