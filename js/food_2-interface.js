// var apiKey = require('./../.env').apiKey;
// var Food = require('./../js/food.js').foodModule;
// var Nutrients = require('./../js/nutrients.js').nutrientsModule;
//
//
//
// $(document).ready(function() {
//   var searchedFood = new Food();
//   var searchedNutrients = new Nutrients();
//
//   $('#food-form').submit(function() {
//     event.preventDefault();
//     $('#show-food').empty();
//     var searchFood = $('#food').val();
//     var resultNumber = $('#number-of-results').val();
//     var reference = $("input:radio[name=reference]:checked").val();
//     searchedFood.getFood(searchFood, resultNumber, reference, apiKey);
//
//
//     });
//     $('.btn').click(function(event) {
//       var searchedNutrients = new Nutrients();
//       event.preventDefault();
//       console.log('clicked');
//       $('#show-nutrition').show();
//       $('#nutrition-button').show();
//       $('#show-nutrition').empty();
//       $('#show-food').hide();
//       $('#food-form').hide();
//       console.log(foodId);
//       var foodId = event.target.id;
//       searchedNutrients.getNutrients(searchNutrients, apiKey, foodId);
//     });
//
//
//     $("#nutrition-button").click(function() {
//       event.preventDefault();
//       $('#show-food').show();
//       $('#food-form').show();
//       $('#show-nutrition').hide();
//       $('#nutrition-button').hide();
//   });
// });
