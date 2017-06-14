// Include React
var React = require("react");

var Search = require("./Search");

var Saved = require("./Saved");
// Create the Main component.
// This will change as we build the proper app.
var Main = React.createClass({
  render: function() {
    return (
      <div className="container">
    	  <div className="jumbotron">
      		<h1>New York Times Article Scrubber</h1>
      		<p>Search for and annotate articles of interest!</p>
     	  </div>
        <div className="row">
          <div className="col-md-12">
            <Search />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Saved />
          </div>
        </div>
      </div>
    );
  }
});
// Export the component back for use in other files
module.exports = Main;
