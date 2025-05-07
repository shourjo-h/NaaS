// filepath: netlify/functions/getReason.js
const fetch = require('node-fetch');

exports.handler = async function () {
  try {
    const response = await fetch('https://naas.isalman.dev/no');
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};