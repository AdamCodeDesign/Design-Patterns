let Singleton = (function () {
  let instance = null;
  let privAppName = "Test App";

  function Configuration() {
    this.getAppName = function () {
      return privAppName;
    };
    this.setAppName = function (appName) {
      privAppName = appName;
    };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = new Configuration();
      }
      return instance;
    },
    data: 'test'
  };
})();

console.log(Singleton);
const config = Singleton.getInstance()
console.log(config)
console.log(config.getAppName())