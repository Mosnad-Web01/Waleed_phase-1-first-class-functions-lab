// Function to return the first two drivers
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// Function to return the last two drivers
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// Array containing the two driver functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create a fare multiplier
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

// Fare doubler function
const fareDoubler = createFareMultiplier(2);

// Fare tripler function
const fareTripler = createFareMultiplier(3);

// Function to select different drivers
const selectDifferentDrivers = function (drivers, selectFunction) {
  return selectFunction(drivers);
};

// Example usage
console.log(returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"])); // => ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"])); // => ['Amari', 'Mo']
console.log(
  selectDifferentDrivers(
    ["Antonia", "Nuru", "Amari", "Mo"],
    returnFirstTwoDrivers
  )
); // => ['Antonia', 'Nuru']
console.log(fareDoubler(10)); // => 20
console.log(fareTripler(10)); // => 30
