var Taskitem = require('./Taskitem');

var Tasklist = React.createClass({
	render: function() {
		var taskList = this.props.tasks.map(function(child) {
			return (
				<Taskitem task={child} key={child.id} />
			);
		});
		
		return (
			<div id="taskList">{taskList}</div>
		);
	}	
});

module.exports = Tasklist;