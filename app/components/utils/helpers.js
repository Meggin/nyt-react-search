//Include axios package for performing HTTP requests.
var axios = require("axios");

var authKey = "5c4953b3d9a64372a9b2d64f55d8d089";

//Helper functions for making API call to NYT
var helper = {

	// Runs query to nytimes
	runQuery: function(searchTerm) {
		
		console.log("We have a search term passed into query: " + searchTerm);

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm;

		return axios.get(queryURL).then(function(response) {
			if (response.data.response.docs[0]) {
				return response.data.response.docs;
			} else {
				return "";
			}
		});
	},

	getSaved: function() {
		return axios.get("/api/saved");
	},

	saveArticle: function(article) {
		return axios.post("/api/saved", {
			title: article.headline.main
			//date: date,
			//url: url
		});
	}
};

// Expore the API helper.
module.exports = helper;
