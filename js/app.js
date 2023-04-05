var typeInput = document.getElementById("type");
var priceInput = document.getElementById("price");
var accessibilityInput = document.getElementById("accessibility");
var getActivityButton = document.getElementById("getActivityButton");
var activityElement = document.getElementById("activity");

getActivityButton.addEventListener("click", function () {

  activityElement.textContent = "Loading...";

  var apiUrl = "http://www.boredapi.com/api/activity/";
  if (typeInput.value !== "") {
    apiUrl += "?type=" + typeInput.value;
  }
  if (priceInput.value !== "") {
    apiUrl += "&price=" + priceInput.value;
  }
  if (accessibilityInput.value !== "") {
    apiUrl += "&accessibility=" + accessibilityInput.value;
  }

  axios.get(apiUrl)
    .then(function (response) {

      activityElement.textContent = response.data.activity;
    })
    .catch(function (error) {

      activityElement.textContent = "Sorry, there was an error getting your activity recommendation.";
      console.log(error);
    });
});
