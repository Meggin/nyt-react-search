// Include React
var React = require("react");

// Create the Search component.
var Search = React.createClass({
  render: function() {
    return (
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Search Parameters</h3>
                </div>
                <div className="panel-body">
                  <form role="form">
                    <div className="form-group">
                      <label for="search">Search Term:</label>
                      {/*<input type="text" class="form-control" id="search-term">*/}
                    </div>
                    <div className="form-group">
                      <label for="pwd">Number of Records to Retrieve:</label>
                      <select class="form-control" id="num-records-select">
						<option value="1">1</option>
						<option value="5" selected>5</option>
						<option value="10">10</option>
      				</select>
                    </div>
                    <div className="form-group">
                      <label for="start-year">Start Year (Optional):</label>
                      {/*<input type="text" class="form-control" id="start-year">*/}
                    </div>
                    <div classNBame="form-group">
                      <label for="end-year">End Year (Optional):</label>
                      {/*<input type="text" class="form-control" id="end-year">*/}
                    </div>
                    <button type="submit" className="btn btn-default" id="run-search">Search</button>
                    <button type="button" className="btn btn-default" id="clear-all">Clear Results</button>

                  </form>
                </div>
              </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
