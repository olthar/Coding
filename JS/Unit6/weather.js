//Require https module
const https = require('https');
//Require http module for status codes
const http = require('http');



//Print Error Messages
function printError(error) {
  console.error(error.message);
}

//Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}

function get(lat, lon ) {
  try {
    // Connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=hourly,minutely,daily&appid=5db2df2b2f123ff4868611173b115e57`, response => {
                            if (response.statusCode === 200) {
                              let body = "";
                              // Read the data
                              response.on('data', data => {
                                body += data.toString();
                              });
  
                              response.on('end', () => {
                                try {
                                  // Parse the data
                                  const profile = JSON.parse(body);                            
                                  // Print the data
                                  console.log(profile.current.temp)
                                //   printMessage(username, profile.badges.length, profile.points.JavaScript);
                                } catch (error) {
                                  printError(error);
                                }
                              });
                            } else {
                                const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
                                const statusCodeError = new Error(message);
                                printError(statusCodeError);
                            }
                          });
    request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}
                               

module.exports.get = get;                                
                                
                                
                                
                                
                                
                                
                                