const { nextISSTimesForMyLocation } = require('./iss');
const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('hear');
//     return console.log("It didn't work!", error);

//   }

//   console.log('It worked! Returned IP:', ip);
// });



// fetchCoordsByIP('69.159.151.175', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log(`{ latitude: ${coords.latitude} longititude: ${coords.longitude} }`);
// });




// fetchISSFlyOverTimes(exampleCoords, (error, responseTime) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log(`Sucess! Flyover time: [ ${JSON.stringify(responseTime)} ]`);
// });
const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log(`There was an error nextISSTimesForMyLocation: ${error}`);
    return;
  }
  printPassTimes(passTimes);
});