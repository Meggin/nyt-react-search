// Include React
var React = require("react");

// Include Search sub-components.
var Query = require("./Query");
var Results = require("./Results")

// Helper for making AJAX requests.
var helpers = require("./utils/helpers");

// Create the Search component.
var Search = React.createClass({

	// Set initial state of search criteria.
	getInitialState: function() {
		return {
			searchTerm: "",
			results: [],
		}
	},

	// If the component changes, i.e. if search query submitted
	componentDidUpdate : function() {

		// Run the article query for the search term
		helpers.runQuery(this.state.searchTerm).then(function(data) {
			console.log("Search results: " + data);
			this.setState({ results: data});
		}.bind(this));
	},

	// Allows children (sub-components) to update parent component.
	setTerm: function(term) {
		this.setState({ searchTerm: term });
	},

	render: function() {
		return (
			<div className="col-md-12">
		    	<div className="row">
					<div className="col-sm-12">
						<Query setTerm={this.setTerm} />
					</div>
				</div>
		      	<div className="row">
					<div className="col-sm-12">
						<Results results={this.state.results} />
					</div>
			  	</div>
			</div>
    	);
  	}
});

// Export the component back for use in other files
module.exports = Search;
