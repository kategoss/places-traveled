// business logic
function Location(city, country, climate, notes, cost) {
  this.locationCity = city;
  this.locationCountry = country;
  this.locationClimate = climate;
  this.locationNotes = notes;
  this.locationCost = cost;
}


// user interface logic
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedClimate = $("input#new-climate").val();
    var inputtedCost = $("input#new-cost").val();
    var inputtedNotes = $("input#new-notes").val();

    var newLocation = new Location(inputtedCity, inputtedCountry, inputtedClimate, inputtedCost, inputtedNotes);

    $("ul#destinations").append("<li><span class='destination'>" + newLocation.locationCity + "</span></li>");

    $(".destination").last().click(function() {
    $("#show-destinations").show();
    $("#show-destinations h2").text(newLocation.locationCity);
    $(".city").text(newLocation.locationCity);
    $(".country").text(newLocation.locationCountry);
    $(".climate").text(newLocation.locationClimate);
    $(".cost").text(newLocation.locationCost);
    $(".notes").text(newLocation.locationNotes);
    });
  });
});
