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
 * @summary Takes in the values from two input fields (tsp, partial tsp)
 * and outputs gross number of tsp
 * @param {number} tsp - Whole, non-fractional tsp inputted by user.
 * @param {number} partialtsp - Fractions of a Tsp (decimal format).
 *
 * @returns {number} Gross sum of all tsp.
 */
export const convertToTsp = (tsp, partialTsp) => {
  let convertedTsp = 0;
  let convertedPartialTsp = 0;

  convertedPartialTsp = +parseFloat(partialTsp).toFixed(3);
  convertedTsp = parseInt(tsp);

  const fullTspAmount = convertedPartialTsp + convertedTsp;

  return fullTspAmount;
};

export const calculateAdjustedBakingTime = (totalBakingHours, totalBakingMins, altitude, unit) => {
  let bakingMinsToInt = totalBakingMins ? parseInt(totalBakingMins) : 0;
  let bakingHoursToInt = totalBakingHours ? parseInt(totalBakingHours) : 0;

  const hoursToMins = bakingHoursToInt * 60;
  const totalBakingTimeInput = hoursToMins + bakingMinsToInt;

  let lowerRangeBakingTime = totalBakingTimeInput * 0.7;
  let upperRangeBakingTime = totalBakingTimeInput * 0.8;

  let originalBakingTime = {
    lowerRangeBakingTime: totalBakingTimeInput,
    upperRangeBakingTime: totalBakingTimeInput
  };

  let bakingTimeMinMax = {
    lowerRangeBakingTime,
    upperRangeBakingTime
  };

  if (unit === 'metric') {
    if (altitude >= 1000) {
      return bakingTimeMinMax;
    } else {
      return originalBakingTime;
    }
  }

  if (altitude >= 3500) {
    return bakingTimeMinMax;
  } else {
    return originalBakingTime;
  }
};

export const createStringFromBakingTime = (minTimeTotal, maxTimeTotal) => {
  let maxHoursLabel = '';
  let maxMinutesLabel = '';

  let minHoursLabel = '';
  let minMinutesLabel = '';

  const hourShortened = 'hr';
  const minShortened = 'min';

  const divider = '-';

  // Calculate maximum time string
  const maxHours = Math.floor(maxTimeTotal / 60);
  const maxMinutes = Math.floor(maxTimeTotal % 60);
  maxHoursLabel = maxHours > 0 ? `${maxHours} ${hourShortened}` : '';
  maxMinutesLabel = maxMinutes > 0 ? `${maxMinutes} ${minShortened}` : '';

  let maxTimeForDisplay = `${maxHoursLabel} ${maxMinutesLabel}`;

  // Calculate maximum time string
  const minHours = Math.floor(minTimeTotal / 60);
  const minMinutes = Math.floor(minTimeTotal % 60);
  minHoursLabel = minHours > 0 ? `${maxHours} ${hourShortened}` : '';
  minMinutesLabel = minMinutes > 0 ? `${minMinutes} ${minShortened}` : '';

  const minTimeForDisplay = `${minHoursLabel} ${minMinutesLabel}`;

  const finalTimeForDisplay = `${minTimeForDisplay} ${divider} ${maxTimeForDisplay}`;
  return finalTimeForDisplay;
};

/**
 * @summary Calculates adjusted baking powder depending on user altitude
 * @param {number} total - The total number of tsp we
 * are using to make our adjustment
 * @param {number} altitude - User inputted altitude.
 */
export const calculateAdjustedBakingPowderSoda = (total, altitude) => {
  if (altitude < 3500) {
    return total;
  } else if (altitude >= 3500 && altitude < 5000) {
    return total * 0.75;
  } else if (altitude >= 5000 && altitude < 6500) {
    return total * 0.5;
  } else if (altitude >= 6500) {
    return total * 0.25;
  }
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
 * @summary Calculates adjusted yeast depending on user altitude
 * @param {number} totalYeast - The total number of tsp of yeast we
 * are using to make our adjustment
 * @param {number} altitude - User inputted altitude.
 *
 * @returns {number} - Total amount of yeast to eventually be displayed to user as string.
 */
export const calculateAdjustedYeast = (totalYeast, altitude) => {
  if (altitude > 3500) {
    return totalYeast * 0.75;
  } else {
    return totalYeast;
  }
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

/**
 * @summary Calculates adjusted liquid depending on user altitude
 * @param {number} totalLiquid -  The total number (int preffered) of tbsp we
 * are using to make our adjustment
 * @param {number} altitude - The altitude a user has inputted.
 *
 * @returns {number} Total number of tablespoons, adjusted for altitude.
 */
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

/**
 * @summary Creates a string of tsp and fractional tsp from raw data to output to user.
 * @param {number} wholeTsp - The total number of tsp we are converting into a string
 *
 * @returns {string} A user-readable string
 */
export const createStringFromTsp = tspInput => {
  /**
   * The reason these formulations are so similar to createStringFromTbsp
   * is becuase using a multiplier of 16 in order to determine our output string
   * is the best way to get a precise measurement without having to depend on unreliable float calculations.
   */
  const totalTsp = tspInput * 16;

  // Whole tsp
  const wholeTsp = Math.floor(totalTsp / 16);

  // Tsp that do not fit into full tsp
  const partialTsp = totalTsp % 16;
  console.log('partialTsp: ', partialTsp);

  // Number of fraction tsp
  let numberOfQuarterTsp = Math.floor(partialTsp / 4);
  console.log('partialTsp / 4: ', partialTsp / 4);
  console.log('numberOfQuarterTsp: ', numberOfQuarterTsp);

  // Setting the string for fractional tsp
  let fractionalString = '';

  if (partialTsp < 4) {
    fractionalString = '1/8';
  }

  if (numberOfQuarterTsp === 1) {
    fractionalString = '1/4';
  } else if (numberOfQuarterTsp === 2) {
    fractionalString = '1/2';
  } else if (numberOfQuarterTsp === 3) {
    fractionalString = '3/4';
  }

  let tspString = '';

  if (wholeTsp > 0 && partialTsp > 0) {
    tspString = `${wholeTsp} ${fractionalString} tsp`;
  } else if (wholeTsp === 0 && partialTsp > 0) {
    tspString = `${fractionalString} tsp`;
  } else if (wholeTsp > 0 && partialTsp === 0) {
    tspString = `${wholeTsp} tsp`;
  }

  let outputString = `${tspString}`;

  return outputString;
};
