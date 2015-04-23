var React            = require('react');
var comm             = require('./comm');
var WebAPI           = require('./utils/WebAPI');

/*
	Components
*/
var Root = require('./components/Root');

/*
    app.js: the main file of your client application.
 */


/*
    Setup communication with the server
 */
WebAPI.setupListeners();

/*
    TODO: Render the UI
 */
React.render(<Root />, document.getElementById('rootNode'));