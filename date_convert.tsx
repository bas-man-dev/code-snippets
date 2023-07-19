const today = new Date();

function ukDate(date) {
  return new Intl.DateTimeFormat(
    'en-GB',
    { 
      weekday: 'long',
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ).format(date);
}

function usDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { 
      weekday: 'long',
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ).format(date);
}

console.log("\nUK: \n", ukDate(today), "US: \n", usDate(today))
console.log(ukDate(new Date("2015-03-25"))

