let Logger = (function () {
  let instance = null;
  let logData = [];

  function log(str, type) {
    logData.push({
      str: str,
      type: type,
      date: new Date(),
    });
  }
  function initLogger() {
    return {
      log: log,
      getLogLength: function () {
        return logData.length;
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = initLogger();
      }
      return instance;
    },
    logData,
  };
})();

const logger1 = Logger.getInstance();
logger1.log("Hello", "alert");
logger1.log("Hello", "alert2");
logger1.log("Hello", "alert3");
console.log(Logger.logData);
console.log(logger1.getLogLength());
