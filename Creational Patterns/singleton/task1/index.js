let AppSettings = (function () {
  let instance = null;
  let privAppName = "Application #1";
  let privAppTheme = "night mode";

  function Configuration() {
    this.getAppName = function () {
      return privAppName;
    };
    this.setAppName = function (appName) {
      privAppName = appName;
    };

    this.getAppTheme = function () {
      return privAppTheme;
    };
    this.setAppTheme = function (appTheme) {
      if (appTheme !== "night mode" && appTheme !== "light mode") return;
      privAppTheme = appTheme;
    };
  }
  return {
    getInstance: function(){
        if(!instance){
            instance = new Configuration()
        }
        return instance
    }
  };
})();

const settings1 = AppSettings.getInstance()
console.log(settings1)
console.log(settings1.getAppName())
settings1.setAppName('Night King')
console.log(settings1.getAppName())
 console.log(settings1.getAppTheme()) 
 settings1.setAppTheme('light mode')
 console.log(settings1.getAppTheme()) 
 console.log(settings1)
