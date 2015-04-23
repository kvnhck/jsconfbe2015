var Options = require('./Options');
var Divider = require('./Divider');
var Tasklist = require('./Tasklist');

var tasks = require('../../../../data/tasks.json');

var Main = React.createClass({
	render: function() {
		return (
			<div className="content ui left aligned">
				<Options />
				<Divider />
				<Tasklist tasks={tasks} />
			</div>
		);
	}	
});

module.exports = Main;