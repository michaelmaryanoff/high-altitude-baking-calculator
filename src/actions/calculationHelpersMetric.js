export const calculateTempMetric = inputTemp => {
  const minTempToAdd = 8;
  const maxTempToAdd = 14;
  let minTemp = parseInt(inputTemp) + minTempToAdd;
  let maxTemp = parseInt(inputTemp) + maxTempToAdd;

  return { minTempMetric: minTemp, maxTempMetric: maxTemp };
};
