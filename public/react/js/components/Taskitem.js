var Taskitem = React.createClass({
	render: function() {
		var task = this.props.task;
		return (		
		  <div id={'Task-'+(task.id+1)} className="ui segment active">
		    
			<div className="ui header title">
				<i className="pointing right icon" style={{display: 'inline-block'}}></i>
				{task.title}
			</div>
			<div className="content">
			  <div dangerouslySetInnerHTML={{ __html: task.description }} />
			  <div className="ui divider" />
			  <div className="questionsContainer">
				<a className="ui ribbon label">Questions</a>
				<div className="questions ui very relaxed list" />
				<form className="ui form">
				  <div className="fields">
					<div className="twelve wide field">
					  <input name="question" className="ui text input" type="text" placeholder="Enter Question..." />
					</div>
					<div className="four wide field">
					  <button className="ui submit primary button">Ask!</button>
					</div>
				  </div>
				</form>
				<div className="ui divider" />
			  </div>
			</div>
			
		  </div>
		);
	}
});
  
module.exports = Taskitem;
