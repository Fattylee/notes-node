const fs = require('fs');

const os = require('os');

const username = os.userInfo().username;
const greeting = `Good-day ${username}!`;

fs.appendFile('greeting.txt', greeting, (err) => {
  if (err) throw err;
  console.log('greeting.txt file successfully created!');})
;console.log(os.userInfo());