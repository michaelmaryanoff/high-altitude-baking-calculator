/**
 * @summary Takes in the values from three input fields (cup, partial cup, tbsp)
 * and outputs gross number of tbsp
 * @param {number} wholeCups - Whole, non-fractional cups inputted by user.
 * @param {number} partialCups - Fractions of a cup (decimal format).
 * @param {number} tbsp - tbsp inputted by user
 *
 * @returns {number} Gross sum of all tablespoons
 */
export const convertToTbsp = (cups, partialCups, tbsp) => {
  const partialCupsToTbsp = parseInt(Math.floor(partialCups * 16));

  const cupsToTbsp = parseInt(cups) * 16;
  let totalTbsp = cupsToTbsp + parseInt(tbsp) + partialCupsToTbsp;

  return totalTbsp;
};

/**
 * @summary Calculates adjusted flour depending on user altitude
 * @param {number} totalFlour - The total number (int preffered) of tbsp we
 * are using to make our adjustment
 * @param {number} altitude - User inputted altitude.
 */

export const calculateAdjustedFlour = (totalFlour, altitude) => {
  let adjustedFlour = totalFlour;

  if (altitude < 3500) {
    return adjustedFlour;
  } else if (altitude >= 3500 && altitude < 5000) {
    adjustedFlour += 1;
  } else if (altitude >= 5000) {
    let tbspToAdd = (altitude - 5000) / 1500;
    tbspToAdd += 2;
    adjustedFlour += Math.floor(tbspToAdd);
  }

  return adjustedFlour;
};

/**
 * @summary Calculates adjusted sugar depending on user altitude
 * @param {number} totalSugar -  The total number (int preffered) of tbsp we
 * are using to make our adjustment
 * @param {number} altitude - The altitude a user has inputted.
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

export const calculateAdjustedLiquid = (totalLiquid, altitude) => {
  // This needs to return an object that has a min and a max!

  let minTbspTotal = totalLiquid;
  let maxTbspTotal = totalLiquid;

  if (altitude < 1000) {
    let minMaxTotals = { minTbspTotal, maxTbspTotal };
    return minMaxTotals;
  } else if (altitude >= 1000 && altitude < 2000) {
    minTbspTotal += 1;
    maxTbspTotal += 2;
  } else if (altitude >= 2000) {
    let baseMin = 1;
    let baseMax = 2;
    let baseAltitude = altitude - 1000;
    let elevationIncrement = 1000;
    let multiplier = 0.5;

    let tbspToAdd = (baseAltitude / elevationIncrement) * multiplier;
    minTbspTotal += Math.floor(tbspToAdd + baseMin);
    maxTbspTotal += Math.floor(tbspToAdd + baseMax);
  }

  let minMaxTotals = { minTbspTotal, maxTbspTotal };

  return minMaxTotals;
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
