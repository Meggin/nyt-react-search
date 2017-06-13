// Include React
var React = require("react");

// Create the Search component.
var Search = React.createClass({
  render: function() {
    return (
      <h1>I'm the Search Component!!</h1>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
