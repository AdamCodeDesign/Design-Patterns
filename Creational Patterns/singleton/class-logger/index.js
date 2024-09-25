class Logger {
  messages = [];
  warningColor = "color: yellow";
  errorColor = "color: red";
  successColor = "color: green";

  constructor() {
    if (Logger.exists) {
      return Logger.instance;
    }

    Logger.exists = true;
    Logger.instance = this;
    console.log(this)

    return this;
  }

  log(msg, type = "normal") {
    this.messages.push({
      msg,
      type,
    });
  }

  printMsg(msg) {
    let msgStyle = "";

    switch (msg.type.toLowerCase()) {
      case "warning":
        msgStyle = this.warningColor;
        break;
      case "error":
        msgStyle = this.errorColor;
        break;
      case "success":
        msgStyle = this.successColor;
        break;
    }
    console.log("%c" + msg.msg, msgStyle);
  }

  showLogs() {
    console.log("Logged messages: ");
    this.messages.forEach((msg) => {
      this.printMsg(msg);
    });
  }
}

const logger1 = new Logger()
const logger2 = new Logger()
console.log(logger1 === logger2)

logger1.log('Message #1')
logger1.log('Message #2', 'warning')
logger1.log('Message #3', 'error')
logger1.log('Message #4', 'success')

logger2.showLogs()