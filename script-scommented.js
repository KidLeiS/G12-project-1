
// API keys
var apiKey = "65a6dfbcf70ea898ea3cbc71";
var gifAPI = "r1IRzTmvuQiyU0OWyewv9yK1v5wIPI0r";

// Reference to the switch element in the HTML
var ftypeSelector = $("#flexSwitchCheckDefault");

// Variables to store API response data
var rawSearchResults;
var searchResults = [];

// Variable to store the URL of a loading GIF
var loadingGif;

// URL to fetch a loading GIF from Giphy API
var loadingImgURL = `https://api.giphy.com/v1/gifs?ids=zlcIBNopQj8Yx5QgpR&api_key=${gifAPI}`;

// Fetching the loading GIF
fetch(loadingImgURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    loadingGif = data.data[0].images.original.url;
    console.log(loadingGif);
  });

// Event handler to handle switch toggle
ftypeSelector.on("click", function(event) {
  event.stopPropagation();
  var isReturnSelected = ftypeSelector[0].checked;

  // Enable or disable the return date based on the switch state
  if (!isReturnSelected) {
    $("#returnSearch").attr("disabled", false);
  } else {
    $("#returnSearch").attr("disabled", true);
  }

  console.log(isReturnSelected);
});

// Function to generate search results from API response
var generateResults = function(object) {
  for (var i = 0; i < object.itineraries.length; i++) {
    // ... (code truncated for brevity)
  }
};

// Function to store search results in localStorage
var storeLocal = function() {
  localStorage.setItem("search", JSON.stringify(searchResults));
};

// Event handler for the search button
$("#submitSearch").on("click", function(event) {
  event.preventDefault();

  // ... (code truncated for brevity)

  // URL for API call
  if (ftypeSelector[0].checked) {
    // Return flight
    var twoWayURL = `https://api.flightapi.io/roundtrip/${apiKey}/${dep}/${arr}/${depDate}/${retDate}/${adu
