// Include React
var React = require("react");

// Create the Saved component
var Saved = React.createClass({
	  // Set a generic set of states associated with Main Component
	  getInitialState: function() {
	    return {
	      title: "Meggin learns a lot of stuff in a few weeks",
	      date: '2017-06-14T00:00:00Z',
	      url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
	    };
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
	      					<div className="panel-body" id="well-section">
	      						<div className="row">
	      							<div className="col-sm-4">
	      								{this.state.title}
	      							</div>
	      							<div className="col-sm-4">
	      								{this.state.date}
	      							</div>
	      							<div className="col-sm-4">
	      								<button type="submit" className="btn btn-default" id="remove-saved">Remove</button>
	      							</div>
	      						</div>
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
