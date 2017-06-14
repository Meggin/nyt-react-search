// Include React
var React = require("react");

// Create the Search component.
var Search = React.createClass({
	render: function() {
		return (
			<div>
		    	<div className="row">
						<div className="col-sm-12">
						<div className="panel panel-primary">
		        			<div className="panel-heading">
		          				<h3 className="panel-title">Search</h3>
		        			</div>
		        			<div className="panel-body">
		          				<form role="form">
		            				<div className="form-group">
		              					<label for="search">Topic</label>
		              					{/*<input type="text" class="form-control" id="search-term">*/}
		            				</div>
		            				<div className="form-group">
		             					<label for="start-year">Start Year</label>
		              					{/*<input type="text" class="form-control" id="start-year">*/}
		            				</div>
		            				<div className="form-group">
		             	 				<label for="end-year">End Year</label>
		              					{/*<input type="text" class="form-control" id="end-year">*/}
		            				</div>
		            				<button type="submit" className="btn btn-default" id="run-search">Search</button>
		          				</form>
		        			</div>
		      			</div>
					</div>
				</div>
		      	<div className="row">
						<div className="col-sm-12">
						<div className="panel panel-primary">
		  					<div className="panel-heading">
		    					<h3 className="panel-title">Results</h3>
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
module.exports = Search;
