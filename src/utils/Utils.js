export default class MH_Utils {

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
	
}
