/**
 * @summary Calculates adjusted sugar depending on user altitude
 * @param {number} totalSugar - A the number (int preffered) of tablspoons we are calculating
 * @param {number} altitude - The altitude a user has inputted
 *
 * @returns {number} Total number of tablespoons, adjusted for altitude.
 */
export const calculateAdjustedSugar = (totalSugar, altitude) => {
  let adjustedSugar = totalSugar;

  /**
   * This is going to give us the total number of half cups.
   * We are then going to reduce by .5 tbsp for every half cup.
   * The reason we are doing this verbosely with two seperate variables is
   * becuase it makes the math easier to follow.
   */
  const numberOfHalfCups = Math.floor(totalSugar / 8);

  const tbspOfSugarToReduceBy = numberOfHalfCups * 0.5;

  if (altitude < 3500) {
    return totalSugar;
  }
  if (altitude >= 3500) {
    adjustedSugar = totalSugar - tbspOfSugarToReduceBy;
  }

  return adjustedSugar;
};

/**
 * @summary Creates a string of cups and tbsp from raw data to output to user.
 * @param {number} totalTbsp - The total number of tablespoons we are converting into a string
 *
 * @returns {string} A user-readable string
 */
export const createStringFromTbsp = totalTbsp => {
  // Whole cups
  const wholeCups = Math.floor(totalTbsp / 16);

  // Tbsp that do not fit into full cups
  const partialCups = totalTbsp % 16;

  // Number of fraction cups
  let numberOfQuarterCups = Math.floor(partialCups / 4);

  // Setting the string for fractional cups
  let fractionalString = '';

  if (numberOfQuarterCups === 1) {
    fractionalString = '1/4';
  } else if (numberOfQuarterCups === 2) {
    fractionalString = '1/2';
  } else if (numberOfQuarterCups === 3) {
    fractionalString = '3/4';
  }

  // Setting the string for leftover Tbsp that do not fit into fractional cups
  const leftoverTbsp = totalTbsp % 4;

  let tbspString = '';

  if (leftoverTbsp !== 0) {
    tbspString = `${leftoverTbsp} Tbsp`;
  }

  let cupsString = '';

  if (wholeCups > 0 && numberOfQuarterCups > 0) {
    cupsString = `${wholeCups} ${fractionalString} ${wholeCups === 1 ? 'Cup' : 'Cups'}`;
  } else if (wholeCups === 0 && numberOfQuarterCups > 0) {
    cupsString = `${fractionalString} Cups`;
  } else if (wholeCups > 0 && numberOfQuarterCups === 0) {
    cupsString = `${wholeCups} ${wholeCups === 1 ? 'Cup' : 'Cups'}`;
  }

  let outputString = `${cupsString} ${tbspString}`;

  return outputString;
};
