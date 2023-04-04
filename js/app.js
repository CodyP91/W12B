// Get references to the input elements and the activity element
const typeInput = document.getElementById("type");
const priceInput = document.getElementById("price");
const accessibilityInput = document.getElementById("accessibility");
const getActivityButton = document.getElementById("getActivityButton");
const activityElement = document.getElementById("activity");

// Add an event listener to the button
getActivityButton.addEventListener("click", () => {
  // Display a loading message to the user
  activityElement.textContent = "Loading...";

  // Build the URL for the API request based on the user's selected options
  let apiUrl = "http://www.boredapi.com/api/activity/";
  if (typeInput.value !== "") {
    apiUrl += `?type=${typeInput.value}`;
  }
  if (priceInput.value !== "") {
    apiUrl += `&price=${priceInput.value}`;
  }
  if (accessibilityInput.value !== "") {
    apiUrl += `&accessibility=${accessibilityInput.value}`;
  }

  // Make an Axios call to the Bored API with the user's selected options
  axios.get(apiUrl)
    .then(response => {
      // Display the activity recommendation to the user
      activityElement.textContent = response.data.activity;
    })
    .catch(error => {
      // Display an error message to the user
      activityElement.textContent = "Sorry, there was an error getting your activity recommendation.";
      console.log(error);
    });
});
