var Options = React.createClass({
	render: function() {
		return (
			<div className="ui form">
				<div className="three fields">
					<div className="inline field">
						<div className="user ui text input">
							<input id="usernameInput" type="text" placeholder="Enter Your Name..." />
						</div>
					</div>
					<div className="inline field">
						<div className="ui left icon input">
							<i className="search icon" />
							<input id="taskSearchInput" type="text" placeholder="Search Tasks..." />
						</div>
					</div>
					<div className="inline field">
						<div className="ui checkbox">
							<label>
								<input id="showQuestionsCheckbox" type="checkbox" />
								Hide Questions
							</label>
						</div>
					</div>
				</div>
			</div>
		);
	}	
});

module.exports = Options;