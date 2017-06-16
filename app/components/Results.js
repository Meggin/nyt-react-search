// Include React
var React = require("react");

// Helper for making AJAX requests.
var helpers = require("./utils/helpers");

var Results = React.createClass({

	getInitialState: function() {
		return {articleToSave: ""};
	},

	handleSave: function(event) {
		// Prevent HTML from trying to submit form if user hits enter.
		event.preventDefault();

		this.setState({ articleToSave: "Great article."});

		helpers.saveArticle(this.state.articleToSave).then(function(data) {
			console.log("New article saved: " + data);
		}.bind(this));
	},

	// Here we render the function
	render: function() {

		if (this.props.results) {
			return (
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Results</h3>
					</div>
					<div className="panel-body" id="results-section">
						<ul>
							{this.props.results.map(function(obj, index){
								return (
									<form onSubmit={this.handleSave}>
										<p key={index}>{obj.headline.main}
										</p>
										<button type="submit">Save</button>
									</form>
								);
							})}
						</ul>
					</div>
				</div>
			);
		} else {
			return (
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Results</h3>
					</div>
					<div className="panel-body" id="results-section">
					</div>
				</div>
			);
		}
	}
});

// Export component back for use in other files
module.exports = Results;