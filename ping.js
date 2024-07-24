const https = require('https');

const pingUrl = 'https://hisaul.com'; // Replace with the URL you want to ping

function pingWebsite() {
  https.get(pingUrl, (res) => {
    console.log(`Pinged ${pingUrl} - Status Code: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`Error pinging ${pingUrl}: ${err.message}`);
  });
}

pingWebsite();
