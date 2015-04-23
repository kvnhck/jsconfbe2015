var assign             = require('object-assign'); // Allows to transfer all properties of an object to another
var ChangeEventEmitter = require('../lib/ChangeEventEmitter');

var AppDispatcher      = require('../dispatcher');
var ActionTypes        = require('../constants/AppConstants').ActionTypes;

var OptionStore = assign({}, ChangeEventEmitter, {
	dispatchToken: AppDispatcher.register(function (action) {
		switch (action.type) {
			case ActionTypes.HIDE_QUESTIONS:
				break;
			case ActionTypes.SHOW_QUESTIONS:
				break;
			default:
				break;
		}
	}
});

module.exports = OptionStore;