// let selectElement = document.getElementById("weather");
// let outputElement = document.getElementById("output");
// selectElement.addEventListener("change", function () {
//   outputElement.textContent =
//     selectElement.options[selectElement.selectedIndex].text;
// });
let place = "delhi";
fetch(
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=us&key=SZKBJ3FB3Z25WXYU3VV32ESUL&contentType=json`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.days[0]);
    console.log("date-", data.days[0].datetime);
    console.log("max-temp", data.days[0].tempmax);
    console.log("min-temp", data.days[0].tempmin);
    console.log("humidity", data.days[0].humidity);
  });
