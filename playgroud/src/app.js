import fetch from 'node-fetch';

fetch('https://www.google.com').then((response) => {
    console.log(`Response: ${JSON.stringify(response, null, 2)}`);
});

const response = await fetch('https://api.github.com/users/github');
const body = await response.json();

console.log(`Body: ${body}`);