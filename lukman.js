const request = require('request');
const axios = require('axios');
const yargs = require('yargs');
require('dotenv').config();


console.log(yargs.argv)

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    let encodedAddress = encodeURIComponent(argv.address)

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.MAP_API_KEY}`,
    json: true

}, (error, response, body) => {
  if(error) return console.log(error);
  // return console.log(JSON.stringify(body,undefined,2));
  const formatted_address = body.results[0].formatted_address;
  const lat = body.results[0].geometry.location.lat;
  const long = body.results[0].geometry.location.lng;
   console.log(formatted_address);
    console.log(lat);
    console.log(long);
    
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${process.env.WEATHERBIT_API_KEY}`;
    
    axios
      .get(url)
      .then(res => {
        console.log('results: ', JSON.stringify(res.data, undefined, 2));
        console.log({maxRate: res.headers['x-ratelimit-limit'],
        remainingCalls: res.headers['x-ratelimit-remaining']
        })
      })
      .catch(console.log);
});
