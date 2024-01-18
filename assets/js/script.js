var apiKey = "65a6dfbcf70ea898ea3cbc71";
var ftypeSelector = $("#flexSwitchCheckDefault");

// Blacks out return date when one way is selected
$("#returnSearch").attr("disabled",true);

ftypeSelector.on("click",function(event){
    event.stopPropagation();
    i = ftypeSelector[0].checked

    if(i) {
        $("#returnSearch").attr("disabled",false);
    } else {
        $("#returnSearch").attr("disabled",true);
    };

    console.log(i);

})



// Logic when the search is submitted
$("#searchButton").on("click",function(event){
    event.preventDefault();

    //Checks if the type selected is one way (false) or return (true)
    if(ftypeSelector[0].checked){

    } else {
        

    }

    var flightType = $("#flexSwitchCheckDefault");
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