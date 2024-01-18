var apiKey = "sh428739766321522266746152871799";

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
})