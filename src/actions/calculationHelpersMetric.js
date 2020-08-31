export const calculateTempMetric = inputTemp => {
  const minTempToAdd = 8;
  const maxTempToAdd = 14;
  let minTemp = parseInt(inputTemp) + minTempToAdd;
  let maxTemp = parseInt(inputTemp) + maxTempToAdd;

  return { minTempMetric: minTemp, maxTempMetric: maxTemp };
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

export const createStringFromLiquidMetric = (minLiquidGrams, maxLiquidGrams) => {
  const minLiquidInt = parseInt(minLiquidGrams);
  const maxLiquidInt = parseInt(maxLiquidGrams);

  const averageLiquid = (minLiquidInt + maxLiquidInt) / 2;

  return averageLiquid;
};

export const calculateAdjustedFlourMetric = (inputFlourGrams, altitude) => {
  let adjustedFlour = parseInt(inputFlourGrams);

  // Since our calculations are based off of tbsp, we will be using this to calculate how many grams to adjust
  const tbspInGrams = 10;

  if (altitude < 1000) {
    return adjustedFlour;
  } else if (altitude >= 1000 && altitude < 1450) {
    adjustedFlour += tbspInGrams;
  } else if (altitude >= 1450) {
    let tbspToAdd = (altitude - 1500) / 450;
    tbspToAdd += 2;
    adjustedFlour += Math.floor(tbspToAdd * tbspInGrams);
  }
  return adjustedFlour;
};

export const createStringFromFlourMetric = inputFlourGrams => {
  return inputFlourGrams;
};
