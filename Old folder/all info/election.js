// Import the Axios library for making HTTP requests
import axios from "axios";

// Define the API endpoint for the election data
const API_ENDPOINT = "https://api.example.com/elections";

// Define the function to get the list of available elections
function getElections() {
  // Use Axios to send a GET request to the API endpoint
  axios.get(API_ENDPOINT)
  .then(response => {
    // Handle the successful response from the API
    handleResponse(response);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    handleError(error);
  });
}

// Define the function to handle the response from the API
function handleResponse(response) {
  // Get the data from the response
  var data = response.data;
  
  // Process the data, such as formatting and displaying it on the page
  processData(data);
}

// Define the function to handle any errors that occurred during the request
function handleError(error) {
  // Log the error message to the console
  console.error(error);
  
  // Display an error message to the user
  displayError(error);
}

// Define the function to process the data from the API
function processData(data) {
  // Get the list of available elections from the data
  var elections = data.elections;
  
  // Loop through the list of elections
  for (let election of elections) {
    // Get the ID, name, and date of the election
    var id = election.id;
    var name = election.name;
    var date = election.date;
    
    // Create a new HTML element for the election
    var electionElement = document.createElement("div");
    
    // Set the ID, name, and date of the election as the content of the element
    electionElement.id = id;
    electionElement.innerHTML = `<h3>${name}</h3><p>${date}</p>`;
    
    // Add the election element to the page
    document.body.appendChild(electionElement);
  }
}

// Define the function to display an error message to the user




var percentageBar = document.querySelector(".percentage-bar");
var percentage = 50; // replace this with the actual percentage value

percentageBar.querySelector(".bar").style.width = `${percentage}%`;
percentageBar.querySelector(".label").innerText = `${percentage}%`;




// 
// <!-- The Google Civic Information API (https://developers.google.com/civic-information) provides access to data about polling places, election officials, and voter information. You can visit the website to learn more about the API and how to use it.

// The United States Elections Project (https://github.com/eyeseast/us-elections-data) provides a public API that gives access to data about voter turnout and election results. You can visit the website to learn more about the API and how to access it.

// The New York Times Elections API (https://developer.nytimes.com/docs/elections-api) provides access to data about the candidates, races, and results of US elections. You can visit the website to learn more about the API and how to use it. -->
  
// // Import the Axios library
// import axios from "axios";

// // Define the API key and the API endpoint
// const API_KEY = "YOUR_API_KEY";
// const API_ENDPOINT = "https://api.example.com/elections/results";

// // Define the function to get the data from the API
// function getElectionResults() {
//   // Use Axios to send a GET request to the API endpoint
//   axios.get(API_ENDPOINT, {
//     params: {
//       key: API_KEY
//     }
//   })
//   .then(response => {
//     // Handle the successful response from the API
//     handleResponse(response);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the request
//     handleError(error);
//   });
// }

// // Define the function to handle the response from the API
// function handleResponse(response) {
//   // Get the data from the response
//   var data = response.data;
  
  // Process the data, such as formatting and displaying it on the



// Introduction
// The Election Project API provides access to data and information about the candidates and the election, such as their bios, campaign statements, and election results. The API allows developers to create applications and websites that can access and display this data, providing a valuable resource for voters and other stakeholders.
// Election API
// The Election API provides access to data about the candidates, races, and results of US elections.

// API Endpoints
// The API has the following endpoints:

// GET /elections - Returns a list of all US elections.
// GET /elections/{year} - Returns the details of the election for the specified year.
// GET /elections/{year}/races - Returns a list of all races in the specified election.
// GET /elections/{year}/races/{race_id} - Returns the details of the specified race in the specified election.
// GET /elections/{year}/races/{race_id}/candidates - Returns a list of all candidates in the specified race in the specified election.
// GET /elections/{year}/races/{race_id}/candidates/{candidate_id} - Returns the details of the specified candidate in the specified race in the specified election.
// API Parameters
// The API has the following parameters:

// year - The year of the election. The year must be a four-digit number in the format YYYY.


// Try again

// Introduction
// The Election Project API provides access to data and information about the candidates and the election, such as their bios, campaign statements, and election results. The API allows developers to create applications and websites that can access and display this data, providing a valuable resource for voters and other stakeholders.

// API Endpoints
// The API has the following endpoints:

// /candidates: Returns a list of the candidates and their basic information, such as their name, party, and education.
// /candidates/{id}: Returns detailed information about the candidate with the specified ID, including their experience, campaign statements, and policy positions.
// /results: Returns the election results, including the vote counts and percentages for each candidate.
// /results/{state}: Returns the election results for the specified state, including the vote counts and percentages for each candidate.
// Authentication
// To access the API, you will need to register for an API key. The API key is a unique identifier that allows you to access the API and its data. You can register for an API key by visiting the API website and completing the registration form.

// Once you have obtained an API key, you can use it to authenticate your requests to the API by including it in the key parameter of the request. For example, to get the list of candidates, you would send a GET request to the /candidates endpoint with the key parameter:

// Copy code
// https://api.example.com/candidates?key=YOUR_API_KEY

