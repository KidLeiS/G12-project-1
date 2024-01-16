var apiKey = "65a6dfbcf70ea898ea3cbc71";


// Logic when the search is submitted
$("#searchFrom").on("submit",function(event){
    event.preventDefault();

})



// var oneWayURL = `https://api.flightapi.io/onewaytrip/${apiKey}/${dep}/${arr}/${depDate}/${adults}/${childs}/${infants}/${class}/${currency}`;
var airportName = "London+Heathrow+Airport";
var type = "airport";

var codeURL = `https://api.flightapi.io/iata/${apiKey}/${airportName}/${type}`;

fetch(`https://api.flightapi.io/iata/${apiKey}?name=${airportName}&${type}`)
.then(function(response) {
    console.log(response);
}).then(function(data){
    console.log(data);
});