var apiKey = "sh428739766321522266746152871799";
// Skyscanner CREATE data needs: market, locale (lang), currency, queryLegs, adults
// Optional CREATE data needs: childrenAges, includeSustainabilityData, cabinClass
// Skyscanner POLL data needs: session token from the CREATE request

async function createData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return response.json();
}

$("#searchButton").on("click",function(event){
    event.stopPropagation;

    var dep = $("#fromSearch").val();
    var arr = $("#toSearch").val();
    var depDate = $("#departSearch").val();
    var retDate = $("#returnSearch").val();
    var adults = $("#adults").val();
    var childs = $("#childs").val();
    var infants = $("#infants").val();
    var flightClass = $("#flightClass").val();
    var currency = $("#currency").val();

    var searchURL = `https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create`

    



})