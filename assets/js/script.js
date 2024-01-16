var apiKey = "65a6dfbcf70ea898ea3cbc71";


// Logic when the search is submitted
$("#searchFrom").on("submit",function(event){
    event.preventDefault();

})



// var oneWayURL = `https://api.flightapi.io/onewaytrip/${apiKey}/${dep}/${arr}/${depDate}/${adults}/${childs}/${infants}/${class}/${currency}`;
var airportName = "London+Heathrow+Airport";
var type = "airport";

var codeURL = `https://api.flightapi.io/iata/api-key?${apiKey}&name=${airportName}&type=${type}`;

fetch(codeURL)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
});