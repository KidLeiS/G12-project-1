var apiKey = "65a6dfbcf70ea898ea3cbc71";
var ftypeSelector = $("#flexSwitchCheckDefault");
var rawSearchResults;



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
    var dep = $("#fromSearch").val();
    var arr = $("#toSearch").val();
    var depDate = $("#departSearch").val();
    var retDate = $("#returnSearch").val();
    var adults = $("#adults").val();
    var childs = $("#childs").val();
    var infants = $("#infants").val();
    var flightClass = $("#flightClass").val();
    var currency = $("#currency").val();
/*
    //Checks if the type selected is one way (false) or return (true), and generates the raw data
    if(ftypeSelector[0].checked){
        //Return flight
        var twoWayURL = `https://api.flightapi.io/roundtrip/${apiKey}/${dep}/${arr}/${depDate}/${retDate}/${adults}/${childs}/${infants}/${flightClass}/${currency}`;
        console.log(twoWayURL);
        // Saving API calls
        // fetch(twoWayURL)
        // .then(function(response) {
        // console.log(response);
        // }).then(function(data){
        //     rawSearchResults = data;
        // });


    } else {
        //One way flight
        var oneWayURL = `https://api.flightapi.io/onewaytrip/${apiKey}/${dep}/${arr}/${depDate}/${adults}/${childs}/${infants}/${flightClass}/${currency}`;
        console.log(oneWayURL);
        // Saving API calls
        // fetch(oneWayURL)
        // .then(function(response) {
        // console.log(response);
        // }).then(function(data){
        //     rawSearchResults = data;
        // });

    }
*/

    //devFrom Docs - link to open modal - nested in $("#searchButton").on("click",function(event)
    $('#exampleModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

  


})


// var airportName = "London+Heathrow+Airport";
// var type = "airport";

// var codeURL = `https://api.flightapi.io/iata/${apiKey}/${airportName}/${type}`;

// fetch(`https://api.flightapi.io/iata/${apiKey}?name=${airportName}&${type}`)
// .then(function(response) {
//     console.log(response);
// }).then(function(data){
//     console.log(data);
// });

