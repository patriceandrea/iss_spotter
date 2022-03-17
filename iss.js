/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
// const ip = "https://api64.ipify.org?format=json'{ 'ip':'69.159.151.175'}";

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api64.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    {
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    }

  });
};

// lighthouse answer

// const fetchMyIP = function (callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };


const fetchCoordsByIP = function(ip, callback) {
  request(`https://api.freegeoip.app/json/${ip}?apikey=e68a8bb0-a63a-11ec-8c7e-e3f982f226f0`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      return callback(Error(msg), ip);

    }

    const { latitude, longitude } = JSON.parse(body);
    return callback(null, { latitude, longitude });
  });
};




module.exports = { fetchMyIP, fetchCoordsByIP };