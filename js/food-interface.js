var apiKey = 'XFjUQUg6HNxzIQYtzNaEjy8Ts743x0ePVWtOFbQU';

$(document).ready(function() {
  $('#food-form').submit(function() {
    event.preventDefault();
    var searchFood = $('#food').val();
    $.get('https://api.nal.usda.gov/ndb/search/?format=json&q=' + searchFood + '&sort=n&max=100&offset=0&ds=Standard+Reference&api_key=' + apiKey, function(response) {
      for (i = 0; i < response.list.item.length; i++) {
        $('#show-food').append('<li>' + response.list.item[i].name + '</li>');
      }
    });
  });
});
