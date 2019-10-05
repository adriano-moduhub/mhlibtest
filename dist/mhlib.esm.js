import hash from 'hash.js';

class MH_Utils {
  static debug(pMessage, printTime, ative) {
    if (pMessage === null || pMessage === undefined) {
      return;
    }

    printTime = typeof printTime != undefined ? printTime : true;
    ative = typeof ative != undefined ? ative : false;

    if (ative) {
      if (printTime) {
        console.log(`${new Date().getTime()} \t ${pMessage}`);
      } else {
        console.log(pMessage);
      }
    }
  }

  static sha256(pData) {
    return hash.sha256().update(pData).digest('hex');
  }

}

class MH_Controller {
  constructor() {
    MH_Utils.debug("new MH_Controller", true, true);
  }

  sign() {
    var hs = MH_Utils.sha256('12345');
    MH_Utils.debug(hs, true, true);
  }

}

class MH_Main {
  static createController() {
    return new MH_Controller();
  }

}

export default MH_Main;
