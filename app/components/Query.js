// Include React.
var React = require("react");

var Query = React.createClass({

	getInitialState: function() {
		return {term: ""};
	}, 

	// Response to user input
	handleChange: function(event) {

		event.preventDefault();

		this.setState({ term: event.target.value });
	},

	// When a user submits...
	handleSubmit: function(event) {

		// Prevent HTML from trying to submit form if user hits enter.
		event.preventDefault();

		// Set the parent to have the search term.
		this.props.setTerm(this.state.term);
		this.setState({ term: ""});
	},

	render: function() {
		return (
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Search</h3>
				</div>
				<div className="panel-body">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<input
								value={this.state.term}
								type="text"
								className="form-control"
								id="term"
								onChange={this.handleChange}
								required
							/>
							<button className="btn btn-primary" type="submit">
                				Search
             				 </button>
             			</div>
					</form>
				</div>
			</div>
		);
	}
});

// Export the component back for use in other files.
module.exports = Query