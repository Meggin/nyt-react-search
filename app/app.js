// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// For now including all three components.
// This will change as we recognize parent/child.
var Main = require("./components/Main");

ReactDOM.render(<Main />, document.getElementById("app"));
