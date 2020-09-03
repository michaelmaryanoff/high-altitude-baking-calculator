export const createStringFromGrams = total => {
  return `${total}`;
};

export const calculateTempMetric = inputTemp => {
  const minTempToAdd = 8;
  const maxTempToAdd = 14;
  let minTemp = parseInt(inputTemp) + minTempToAdd;
  let maxTemp = parseInt(inputTemp) + maxTempToAdd;

  return { minTempMetric: minTemp, maxTempMetric: maxTemp };
};

export const calculateAdjustedYeastMetric = (userInput, altitude) => {
  if (altitude > 1000) {
    return userInput * 0.75;
  } else {
    return userInput;
  }
};

// This function can be used for both baking powder and soda
export const calculateAdjustedBakingPowderSodaMetric = (userInput, altitude) => {
  let userInputToInt = parseInt(userInput);

  if (altitude < 1000) {
    return userInputToInt;
  } else if (altitude >= 1000 && altitude < 1500) {
    return userInputToInt * 0.75;
  } else if (altitude >= 1500 && altitude < 2000) {
    return userInputToInt * 0.5;
  } else if (altitude >= 2000) {
    return userInputToInt * 0.25;
  }
};

export const calculateAdjustedLiquidMetric = (inputLiquidGrams, altitude) => {
  let minLiquid = parseInt(inputLiquidGrams);
  let maxLiquid = parseInt(inputLiquidGrams);

  let tbpsInGrams = 15;

  if (altitude < 300) {
    let mixMaxTotals = { minLiquid, maxLiquid };
    return mixMaxTotals;
  } else if (altitude >= 300 && altitude < 600) {
    minLiquid += tbpsInGrams;
    maxLiquid += tbpsInGrams * 2;
  } else if (altitude >= 600) {
    let baseMin = 1;
    let baseMax = 2;
    let baseAltitude = altitude - 300;
    let elevationIncrement = 300;
    let multiplier = 0.5;

    let tbspToAdd = (baseAltitude / elevationIncrement) * multiplier;
    minLiquid += Math.floor((tbspToAdd + baseMin) * tbpsInGrams);
    maxLiquid += Math.floor((tbspToAdd + baseMax) * tbpsInGrams);
  }
  return { minLiquid, maxLiquid };
};

export const calculateAdjustedSugarMetric = (totalSugar, altitude) => {
  let adjustedSugar = parseInt(totalSugar);

  /**
   * This is going to give us the total number of half cups.
   * We are then going to reduce by .5 tbsp for every half cup.
   * The reason we are doing this verbosely with two seperate variables is
   * becuase it makes the math easier to follow. Since we are basing our
   * formulas on tbsp, we need to have the gram equivalents of tbsp first.
   */

  const tbspInGrams = 12;

  const halfCupsToGrams = tbspInGrams * 8;

  const numberOfHalfCups = Math.floor(totalSugar / halfCupsToGrams);

  const tbspOfSugarToReduceBy = numberOfHalfCups * 0.5;

  if (altitude < 1000) {
    return adjustedSugar;
  } else if (altitude >= 1000) {
    adjustedSugar = totalSugar - tbspOfSugarToReduceBy * tbspInGrams;
  }

  return adjustedSugar;
};

export const createStringFromLiquidMetric = (minLiquidGrams, maxLiquidGrams) => {
  const minLiquidInt = parseInt(minLiquidGrams);
  const maxLiquidInt = parseInt(maxLiquidGrams);

  const averageLiquid = (minLiquidInt + maxLiquidInt) / 2;
  const averageLiquidFloor = Math.floor(averageLiquid);

  return `${averageLiquidFloor}`;
};

export const calculateAdjustedFlourMetric = (inputFlourGrams, altitude) => {
  let adjustedFlour = parseInt(inputFlourGrams);

  // Since our calculations are based off of tbsp, we will be using this to calculate how many grams to adjust
  const tbspInGrams = 8.5;

  if (altitude < 1000) {
    return adjustedFlour;
  } else if (altitude >= 1000 && altitude < 1450) {
    adjustedFlour += tbspInGrams;
  } else if (altitude >= 1450) {
    let tbspToAdd = (altitude - 1450) / 450;
    tbspToAdd += 2;
    adjustedFlour += Math.floor(tbspToAdd * tbspInGrams);
  }

  return Math.floor(adjustedFlour);
};
