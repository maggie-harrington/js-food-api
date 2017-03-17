// function Nutrients() {
// }
//
// Nutrients.prototype.getNutrients = function(searchNutrients, apiKey, foodId) {
//   console.log('worked!');
//   $.get(' https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=' + apiKey + '&nutrients=205&nutrients=204&nutrients=208&nutrients=269&nutrients=203&nutrients=606&nutrients=291&ndbno=' + foodId, function(response)
//   {
//     $('#show-nutrition').append('<h4>' + response.report.foods[0].name + '</h4><br>');
//
//     for (j = 0; j < response.report.foods[0].nutrients.length; j++) {
//       $('#show-nutrition').append('<li>' + response.report.foods[0].nutrients[j].nutrient + ' '  + response.report.foods[0].nutrients[j].value + ' ' + response.report.foods[0].nutrients[j].unit + '</li>');
//     }
//   });
// };
//
//
// exports.nutrientsModule = Nutrients;
