const { nextISSTimesForMyLocation } = require('./iss_promised');

// fetchMyIP().then(
//   (bodyIp) => {
//     fetchCoordsByIP(bodyIp).then(
//       (coords) => { console.log(coords) }
//     ).catch(
//       (error) => { console.log(error); }
//     )
//   }
// ).catch((error) => { console.log(error) });
const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((value) => printPassTimes(value))
  .catch((error) => {
    return `There's an error! : ${error}`;
  });
