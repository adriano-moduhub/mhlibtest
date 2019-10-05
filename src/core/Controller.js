import MH_Utils from '../utils/Utils.js';

export default class MH_Controller {

	constructor() {

		MH_Utils.debug("new MH_Controller", true, true);

	}

	sign() {

		var hs = MH_Utils.sha256('12345');

		MH_Utils.debug(hs, true, true);

	}

}
