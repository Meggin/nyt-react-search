// Include React
var React = require("react");
// Create the Main component.
// This will change as we build the proper app.
var Main = React.createClass({
  render: function() {
    return (
      <h1>I'm a div that will be the main container.</h1>
    );
  }
});
// Export the component back for use in other files
module.exports = Main;
