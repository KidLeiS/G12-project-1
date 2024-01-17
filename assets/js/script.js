var apiKey = "65a6dfbcf70ea898ea3cbc71";
var flightType = $("#flexSwitchCheckDefault").attr("checked");
console.log(flightType);

// Logic when the search is submitted
$("#searchFrom").on("submit",function(event){
    event.preventDefault();

    var flightType = $("#flexSwitchCheckDefault").attr("checked");
    console.log(flightType);

    var dep = $("#fromSearch");
    var arr = $("#toSearch");
    var depDate = $("#departSearch");
    var retDate = $("#returnSearch");
    var adults = $("#adultSearch");
    var childs = $("#childSearch");
    var infants = $("#infantSearch");
    var flightClass = $("#classSearch");
    var currency = $("#currencySearch");



})




var airportName = "London+Heathrow+Airport";
var type = "airport";

var codeURL = `https://api.flightapi.io/iata/${apiKey}/${airportName}/${type}`;

fetch(`https://api.flightapi.io/iata/${apiKey}?name=${airportName}&${type}`)
.then(function(response) {
    console.log(response);
}).then(function(data){
    console.log(data);
});

// function for 1 way URL call
var triggerOneway = function() {
    var oneWayURL = `https://api.flightapi.io/onewaytrip/${apiKey}/${dep}/${arr}/${depDate}/${adults}/${childs}/${infants}/${flightClass}/${currency}`;

    fetch(oneWayURL)
    .then(function(response) {
    console.log(response);
    }).then(function(data){
        var searchResults = data.itineraries;
    });
}