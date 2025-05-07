// filepath: netlify/functions/getReason.js
import fetch from 'node-fetch';

export const handler = async function () {
  try {
    const response = await fetch('https://naas.isalman.dev/no');
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from the API' }),
    };
  }
};