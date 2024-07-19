// Function to generate a random number between a min and max
export const randomNumGen = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

// Function to format a number as 2.5k if num > 1000, otherwise keep the same format
export const shortenNumber = (num, digits) => {
  const units = ["k", "M", "G", "T", "P", "E", "Z", "Y"];

  for (let i = units.length - 1; i >= 0; i -= 1) {
    const decimal = 1000 ** (i + 1);

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }

  return num;
};
