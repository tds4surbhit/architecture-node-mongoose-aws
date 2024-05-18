const fs = require("fs");

function logReqRes(fileName) {
  return (req, res, next) => {
    const logMessage = `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`;
    fs.appendFile(fileName, logMessage, (err) => {
      if (err) {
        console.error(`Failed to write to file ${fileName}:`, err);
      }
      next();
    });
  };
}

module.exports = {
  logReqRes,
};
