var Header = React.createClass({
	render: function() {
		return (
			<h1 className="ui dividing header">
				<img src="/common/images/jsconflogo.png" />
				<img src="/common/images/reactlogo.svg" />

				<div className="content">
					{ this.props.title }
					<div className="sub header">{ this.props.subtitle }</div>
				</div>
			</h1>
		);
	}
});

module.exports = Header;