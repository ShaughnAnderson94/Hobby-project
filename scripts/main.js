const event = new Date(Date.now());
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));

const display = document.querySelector("#date-time");
display.innerHTML =event;