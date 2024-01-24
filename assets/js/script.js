var apiKey = "65a6dfbcf70ea898ea3cbc71";
var gifAPI = "r1IRzTmvuQiyU0OWyewv9yK1v5wIPI0r";
var OW = $("#oneWay");
var rawSearchResults;
var searchResults = [];
var loadingGif;

//Loading page GIF
loadingImgURL = `https://api.giphy.com/v1/gifs?ids=zlcIBNopQj8Yx5QgpR&api_key=${gifAPI}`;

fetch(loadingImgURL)
.then(function(response) {
    return response.json();
}).then(function(data) {
    loadingGif = data.data[0].images.original.url;
    console.log(loadingGif);
});

// Blacks out return date when one way is selected
$("#returnSearch").attr("disabled",false);


var generateResults = function (object) {
    for (var i = 0; i < object.itineraries.length; i++){
        var rawItin = object.itineraries[i];
        
        var cheapestPrice = 0;
        var cheapestURL;

        for (var k = 0; k < rawItin.pricing_options.length; k++) {
            if (cheapestPrice === 0) {
                cheapestPrice = rawItin.pricing_options[k].price.amount;
                cheapestURL = rawItin.pricing_options[k].items[0].url;
            } else if (cheapestPrice > rawItin.pricing_options[k].price.amount){
                cheapestPrice = rawItin.pricing_options[k].price.amount;
                cheapestURL = rawItin.pricing_options[k].items[0].url;
            }
        };

        var itinerary = {
            score: rawItin.score,
            price: cheapestPrice,
            deeplink: cheapestURL,
            legs: [],
        };

        for (var j = 0; j < rawItin.leg_ids.length; j++){
            var rawLeg = object.legs.find(o => o.id === rawItin.leg_ids[j]);
            var xleg = {
                origin_id: rawLeg.origin_place_id,
                final_id: rawLeg.destination_place_id,
                startTime: rawLeg.departure,
                endTime: rawLeg.arrival,
                duration: rawLeg.duration,
                stops: rawLeg.stop_count,
                carriers: [],
            };
            for (var f = 0; f < rawLeg.operating_carrier_ids.length; f++) {
                xleg.carriers.push(object.carriers.find(l => l.id === rawLeg.operating_carrier_ids[f]).name)
            };
            
            itinerary.legs.push(xleg);
        }
        searchResults.push(itinerary);
        //console.log(itinerary);
    }
}

//Push search results into LocalStorage
var storeLocal = function (){
    localStorage.setItem("search", JSON.stringify(searchResults));
};



// Logic when the search is submitted
$("#submitSearch").on("click",function(event){
    event.preventDefault();
    var dep = $("#fromSearch").val();
    var arr = $("#toSearch").val();
    var depDate = dayjs($("#departSearch").val()).format("YYYY-MM-DD");
    var retDate = dayjs($("#returnSearch").val()).format("YYYY-MM-DD");
    var adults = document.getElementById("adults").dataset.modal;
    var childs = document.getElementById("childs").dataset.modal;
    var infants = document.getElementById("infants").dataset.modal;
    var flightClass = document.getElementById("flightClass").dataset.modal;
    var currency = document.getElementById("currency").dataset.modal;

    var loadingImg = $("<img>").attr("src", loadingGif);
    var loadingPage = $("<div>").attr("class", "loading");

    loadingPage.append(loadingImg);

    $("body").prepend(loadingPage);

    //Checks if the type selected is one way (false) or return (true), and generates the raw data
    if(OW[0].checked){
        // Oneway flight
        var oneWayURL = `https://api.flightapi.io/onewaytrip/${apiKey}/${dep}/${arr}/${depDate}/${adults}/${childs}/${infants}/${flightClass}/${currency}`;
        console.log(oneWayURL);
        // Saving API calls
        fetch(oneWayURL)
        .then(function(response) {
            return response.json();
        }).then(function(data){
            console.log(data);
            generateResults(data);
            storeLocal();
            window.location.replace("page2.html");
        });

    } else {
        //Return flight
        var twoWayURL = `https://api.flightapi.io/roundtrip/${apiKey}/${dep}/${arr}/${depDate}/${retDate}/${adults}/${childs}/${infants}/${flightClass}/${currency}`;
        console.log(twoWayURL);

        // API call
        fetch(twoWayURL)
        .then(function(response) {
            return response.json();
        }).then(function(data){
            console.log(data);
            generateResults(data);
            console.log(searchResults);
            storeLocal();
            window.location.replace("page2.html");
        });


    }
});


// Modal logic
$(document).ready(function(){
    $("#numberTravellersInput").click(function(){
      $("#exampleModal").modal();
      console.log("modal should open");
    });
    
  });

//From Docs - link to open modal - nested in $("#searchButton").on("click",function(event)
$('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$("#modal-input").on('submit', function(event){
    event.preventDefault();
    var numAd = $("#adults").val();
    var numCh = $("#childs").val();
    var numInf = $("#infants").val();
    var fClass = $("#flightClass").val();
    var ccy = $("#currency").val()

    if (numAd > 1) {
        document.getElementById("adults").dataset.modal = numAd;
    };
    if (numCh > 0) {
        document.getElementById("childs").dataset.modal = numCh;
    };
    if (numInf > 0) {
        document.getElementById("infants").dataset.modal = numInf;
    };
    document.getElementById("flightClass").dataset.modal = fClass;
    document.getElementById("currency").dataset.modal = ccy;

    $('#travellersModal').modal('hide');
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


// var airportName = "London+Heathrow+Airport";
// var type = "airport";

// var codeURL = `https://api.flightapi.io/iata/${apiKey}/${airportName}/${type}`;

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


//Display First Price:
// Assuming searchResults is an array with at least one result
// if (searchResults.length > 0) {
//     var firstPrice = searchResults[0].price;
//     console.log("First Price:", firstPrice);
//   } else {
//     console.log("No search results available.");
//   }

// Assuming you have stored search results in Local Storage
var storedSearchResults = JSON.parse(localStorage.getItem("search"));

// Check if there are stored search results
if (storedSearchResults && storedSearchResults.length > 0) {
  var firstPrice = storedSearchResults[0].price;
  console.log("First Price from Local Storage:", firstPrice);
} else {
  console.log("No stored search results available.");
}
