// Include React
var React = require("react");

var Search = require("./Search");

var Saved = require("./Saved");

// Create the Main component.
var Main = React.createClass({
  // Describe Main Component's render method
  render: function() {
    return (
      <div className="container">
    	  <div className="jumbotron">
      		<h1>New York Times Article Scrubber</h1>
      		<p>Search for and annotate articles of interest!</p>
     	  </div>
        <div className="row">
          <Search />
        </div>
        <div className="row">
          <Saved />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
