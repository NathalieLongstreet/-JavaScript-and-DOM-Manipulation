// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $timeInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
// var $resetBtn = document.querySelector("#reset");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
// $resetBtn.addEventListener("click", handleResetButtonClick);

// Set filteredData to dataSet initially
var filteredTime = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredTime.length; i++) {
    // Get get the current address object and its fields
    var time = filteredTime[i];
    var fields = Object.keys(time);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = time[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterTime = $timeInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredTime = dataSet.filter(function(time) {
    var dataTime = time.datetime.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return dataTime===filterTime;
  });
  renderTable();
}

// function handleResetButtonClick() {
//     filteredData = dataSet;
//     $dateInput.value = "";
//     $cityInput.value = "";
//     $stateInput.value = "";
//     $countryInput.value = "";
//     $shapeInput.value = "";
//     renderTable();
//   }
// Render the table for the first time on page load
renderTable();
