// Include React
var React = require("react");

var Results = React.createClass({

	// Here we render the function
	render: function() {

		if (this.props.results) {
			return (
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Results</h3>
						</div>
						<div className="panel-body" id="well-section">
							<ul>
								{this.props.results.map(function(obj, index){
									return (
										<div key={index}>
											<li className="article-name">{obj.headline.main}</li>
										</div>
									)
								})}
							</ul>
						</div>
					</div>
			)
		} else {
			return (
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Results</h3>
						</div>
						<div className="panel-body" id="well-section"></div>
					</div>
			)
		}
	}

});

// Export component back for use in other files
module.exports = Results;