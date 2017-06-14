// Include React
var React = require("react");

// Create the Saved component
var Saved = React.createClass({
  	render: function() {
    	return (
			<div>
	          	<div className="row">
	  				<div className="col-sm-12">
	    				<div className="panel panel-primary">
	      					<div className="panel-heading">
	        					<h3 className="panel-title">Saved Articles</h3>
	      					</div>
	      					<div className="panel-body" id="well-section"></div>
	    				</div>
	  				</div>
			  	</div>
			</div>		
    	);
  	}
});

// Export the component back for use in other files
module.exports = Saved;
