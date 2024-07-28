const https = require('https');
const cron = require('node-cron');

const pingUrl = 'https://hisaul.com'; // Replace with the URL you want to ping

function pingWebsite() {
  https.get(pingUrl, (res) => {
    console.log(`Pinged ${pingUrl} - Status Code: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`Error pinging ${pingUrl}: ${err.message}`);
  });
}

// Schedule the task to run every 5 minutes
cron.schedule('*/5 * * * *', () => {
  console.log('Running task every 5 minutes');
  pingWebsite();
});

// Keep the process running
setInterval(() => {}, 1 << 30);
