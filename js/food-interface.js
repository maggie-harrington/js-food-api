var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#food-form').submit(function() {
    event.preventDefault();
    $('#show-food').empty();
    var searchFood = $('#food').val();
    var resultNumber = $('#number-of-results').val();
    var reference = $("input:radio[name=reference]:checked").val();
    $.get('https://api.nal.usda.gov/ndb/search/?format=json&q=' + searchFood + '&sort=n&max=' + resultNumber + '&offset=0&ds=' + reference + '&api_key=' + apiKey, function(response) {
      for (i = 0; i < response.list.item.length; i++) {
        $('#show-food').append('<li>' + response.list.item[i].name + ' ID: ' + response.list.item[i].ndbno + ' <span><button type="button" class="btn btn-xs" id="' + response.list.item[i].ndbno + '">Nutrition Info</button></span>' + '</li><br>');
      }

      $('.btn').click(function(event) {
        event.preventDefault();
        console.log('clicked');
        $('#show-nutrition').show();
        $('#nutrition-button').show();
        $('#show-nutrition').empty();
        $('#show-food').hide();
        $('#food-form').hide();
        var foodId = event.target.id;
        console.log(foodId);
        $.get(' https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=' + apiKey + '&nutrients=205&nutrients=204&nutrients=208&nutrients=269&nutrients=203&nutrients=606&nutrients=291&ndbno=' + foodId, function(response)
        {
          $('#show-nutrition').append('<h4>' + response.report.foods[0].name + '</h4><br>');

          for (j = 0; j < response.report.foods[0].nutrients.length; j++) {
            $('#show-nutrition').append('<li>' + response.report.foods[0].nutrients[j].nutrient + ' '  + response.report.foods[0].nutrients[j].value + ' ' + response.report.foods[0].nutrients[j].unit + '</li>');
          }
        });
      });
    });
  });
  //   $(document).click(function() {
  //     console.log('clicked');
  //   });

  $("#nutrition-button").click(function() {
    event.preventDefault();
    $('#show-food').show();
    $('#food-form').show();
    $('#show-nutrition').hide();
    $('#nutrition-button').hide();
  });
});
