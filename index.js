const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('hear');
    return console.log("It didn't work!", error);

  }

  console.log('It worked! Returned IP:', ip);
});



fetchCoordsByIP('69.159.151.175', (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log(`{ latitude: ${coords.latitude} longititude: ${coords.longitude} }`);
});