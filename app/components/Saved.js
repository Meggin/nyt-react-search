// Include React
var React = require("react");

var helpers = require("./utils/helpers");

// Create the Saved component
var Saved = React.createClass({
	// Set a generic set of states associated with Main Component
	getInitialState: function() {
		return {
	    	saved: []
		};
	},

	componentDidMount: function() {
		helpers.getSaved().then(function(response) {
			console.log("Saved articles: " + response);

			if (response !== this.state.saved) {
				console.log("New saved articles", response.data);
				this.setState({ saved: response.data });
			}
		}.bind(this));
	},

	deleteArticle: function() {
		console.log("We are in delete function.");
	},

  	render: function() {
  		return (
  			<div className="col-md-12">
  				<div className="row">
		  			<div className="col-sm-12">
		    			<div className="panel panel-primary">
		      				<div className="panel-heading">
		        				<h3 className="panel-title">Saved Articles</h3>
		      				</div>
		      				<div className="panel-body" id="saved-section">
		      					{this.state.saved.map(function(article, i) {
		      						return (
		      							<p key={i}>{article.title}</p>
		      						);
		      					})}
		      				</div>
		      			</div>
		      		</div>
		      	</div>
		    </div>
  		);
  	}
});

// Export the component back for use in other files
module.exports = Saved;
