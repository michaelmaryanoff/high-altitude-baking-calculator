export const calculateTempMetric = inputTemp => {
  const minTempToAdd = 8;
  const maxTempToAdd = 14;
  let minTemp = parseInt(inputTemp) + minTempToAdd;
  let maxTemp = parseInt(inputTemp) + maxTempToAdd;

  return { minTempMetric: minTemp, maxTempMetric: maxTemp };
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
