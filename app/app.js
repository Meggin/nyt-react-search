// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// For now including all three components.
// This will change as we recognize parent/child.
var Main = require("./components/Main");
var Search = require("./components/Search");
var Saved = require("./components/Saved");

ReactDOM.render(
// For now rendering in main container but this will change.
  <div className="main-container">
    <Main />
    <Search />
    <Saved />
  </div>
  , document.getElementById("app")
);
