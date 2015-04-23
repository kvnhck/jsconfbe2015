var Header = require('./Header');
var Divider = require('./Divider');
var Main = require('./Main');

var Root = React.createClass({
	render: function() {
		return (
			<div className="ui one column page centered stackable grid">
				<div className="row">
					<div className="column thirteen wide ui segment">
						<Header title="React + Flux Workshop" subtitle="JSConfBe" />
						<Divider />
						<Main />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Root;