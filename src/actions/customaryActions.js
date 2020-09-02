import {
  SET_ALTITUDE_FEET,
  SET_OVEN_TEMP_F,
  SET_BAKING_MINS_CUST,
  SET_BAKING_HOURS_CUST,
  SET_LIQUID_CUPS,
  SET_LIQUID_PARTIAL_CUP,
  SET_LIQUID_TBSP,
  SET_LIQUID_TOTAL,
  SET_FLOUR_CUPS,
  SET_FLOUR_PARTIAL_CUP,
  SET_FLOUR_TBSP,
  SET_FLOUR_TOTAL,
  SET_SUGAR_CUPS,
  SET_SUGAR_PARTIAL_CUP,
  SET_SUGAR_TBSP,
  SET_SUGAR_TOTAL,
  SET_BAKING_POWDER_TSP,
  SET_BAKING_POWDER_PARTIAL_TSP,
  SET_BAKING_POWDER_TOTAL,
  SET_BAKING_SODA_TSP,
  SET_BAKING_SODA_PARTIAL_TSP,
  SET_BAKING_SODA_TOTAL,
  SET_YEAST_TSP,
  SET_YEAST_PARTIAL_TSP,
  SET_YEAST_TOTAL,
  CALCULATE_MIN_OVEN_TEMP_CUST,
  CALCULATE_MAX_OVEN_TEMP_CUST,
  CALCULATE_MIN_TIME_CUST,
  CALCULATE_MAX_TIME_CUST,
  CALCULATE_BAKING_POWDER_CUST,
  CALCULATE_BAKING_SODA_CUST,
  CALCULATE_YEAST_CUST,
  CALCULATE_FLOUR_CUST,
  CALCULATE_MIN_LIQUID_CUST,
  CALCULATE_MAX_LIQUID_CUST,
  CALCULATE_SUGAR_CUST,
  SET_DISPLAY_TEMP_CUST,
  SET_DISPLAY_TIME_CUST,
  SET_DISPLAY_FLOUR_CUST,
  SET_DISPLAY_LIQUID_CUST,
  SET_DISPLAY_SUGAR_CUST,
  SET_DISPLAY_YEAST_CUST,
  SET_DISPLAY_BAKING_POWDER_CUST,
  SET_DISPLAY_BAKING_SODA_CUST,
  SELECT_UNIT,
  CLEAR_FORM
} from './types';

import {
  calculateAdjustedSugar,
  createStringFromTbsp,
  convertToTbsp,
  calculateAdjustedFlour,
  calculateAdjustedLiquid,
  convertToTsp,
  calculateAdjustedYeast,
  createStringFromTsp,
  calculateAdjustedBakingPowderSoda,
  calculateAdjustedBakingTime,
  createStringFromBakingTime
} from './calculationHelpers';

/**
 * @summary
 * This group of functions calculates our outputs to the user
 */

export const calculateOutputs = () => dispatch => {
  dispatch(calculateTemp());
  dispatch(calculateBakingTime());
  dispatch(calculateLiquid());
  dispatch(calculateSugar());
  dispatch(calculateFlour());
  dispatch(calculateBakingPowder());
  dispatch(calculateBakingSoda());
  dispatch(calculateYeast());
};

export const calculatTotalBakingPowderInput = () => (dispatch, getState) => {
  const state = getState();

  const { bakingPowderTspSet, bakingPowderPartialTspSet } = state.calculationFormCustomary;

  let totalTsp = convertToTsp(bakingPowderTspSet, bakingPowderPartialTspSet);

  dispatch({ type: SET_BAKING_POWDER_TOTAL, payload: totalTsp });
};

export const calculateTotalBakingSodaInput = () => (dispatch, getState) => {
  const state = getState();

  const { bakingSodaTspSet, bakingSodaPartialTspSet } = state.calculationFormCustomary;

  let totalTsp = convertToTsp(bakingSodaTspSet, bakingSodaPartialTspSet);

  dispatch({ type: SET_BAKING_SODA_TOTAL, payload: totalTsp });
};

export const calculateTotalYeastInput = () => (dispatch, getState) => {
  const state = getState();

  const { yeastTspSet, yeastPartialTspSet } = state.calculationFormCustomary;

  let totalTsp = convertToTsp(yeastTspSet, yeastPartialTspSet);

  dispatch({ type: SET_YEAST_TOTAL, payload: totalTsp });
};

export const calculateTotalLiquidInput = () => (dispatch, getState) => {
  const state = getState();

  const { liquidCupsSet, liquidPartialCupSet, liquidTbspSet } = state.calculationFormCustomary;

  let totalTbsp = convertToTbsp(liquidCupsSet, liquidPartialCupSet, liquidTbspSet);

  dispatch({ type: SET_LIQUID_TOTAL, payload: totalTbsp });
};

export const caclulateTotalSugarInput = () => (dispatch, getState) => {
  const state = getState();

  const { sugarCupsSet, sugarPartialCupSet, sugarTbspSet } = state.calculationFormCustomary;

  let totalTbsp = convertToTbsp(sugarCupsSet, sugarPartialCupSet, sugarTbspSet);

  dispatch({ type: SET_SUGAR_TOTAL, payload: totalTbsp });
};

export const calculateTotalFlourInput = () => (dispatch, getState) => {
  const state = getState();

  const { flourCupsSet, flourPartialCupSet, flourTbspSet } = state.calculationFormCustomary;

  let totalTbsp = convertToTbsp(flourCupsSet, flourPartialCupSet, flourTbspSet);
  dispatch({ type: SET_FLOUR_TOTAL, payload: totalTbsp });
};

export const calculateLiquid = () => (dispatch, getState) => {
  const state = getState();

  const { liquidTotalSet, altitude } = state.calculationFormCustomary;

  if (liquidTotalSet) {
    const { minTbspTotal, maxTbspTotal } = calculateAdjustedLiquid(liquidTotalSet, altitude);
    dispatch({ type: CALCULATE_MIN_LIQUID_CUST, payload: minTbspTotal });
    dispatch({ type: CALCULATE_MAX_LIQUID_CUST, payload: maxTbspTotal });

    const averageLiquid = (minTbspTotal + maxTbspTotal) / 2;
    const outputString = createStringFromTbsp(averageLiquid);

    dispatch({ type: SET_DISPLAY_LIQUID_CUST, payload: outputString });
  }
};

export const calculateSugar = () => (dispatch, getState) => {
  const state = getState();

  const { sugarTotalSetCust, altitude } = state.calculationFormCustomary;

  if (sugarTotalSetCust) {
    const adjustedSugar = calculateAdjustedSugar(sugarTotalSetCust, altitude);
    dispatch({ type: CALCULATE_SUGAR_CUST, payload: adjustedSugar });

    const outputString = createStringFromTbsp(adjustedSugar);
    dispatch({ type: SET_DISPLAY_SUGAR_CUST, payload: outputString });
  }
};

export const calculateFlour = () => (dispatch, getState) => {
  const state = getState();

  const { flourTotalSet, altitude } = state.calculationFormCustomary;

  if (flourTotalSet) {
    const adjustedFlour = calculateAdjustedFlour(flourTotalSet, altitude);
    dispatch({ type: CALCULATE_FLOUR_CUST, payload: adjustedFlour });

    const outputString = createStringFromTbsp(adjustedFlour);
    dispatch({ type: SET_DISPLAY_FLOUR_CUST, payload: outputString });
  }
};

export const calculateBakingTime = () => (dispatch, getState) => {
  const state = getState();

  const { bakingHoursSetCust, bakingMinsSetCust, altitude } = state.calculationFormCustomary;

  if (bakingMinsSetCust || bakingHoursSetCust) {
    const adjustedbakingTime = calculateAdjustedBakingTime(
      bakingHoursSetCust,
      bakingMinsSetCust,
      altitude
    );
    const { lowerRangeBakingTime, upperRangeBakingTime } = adjustedbakingTime;
    dispatch({ type: CALCULATE_MIN_TIME_CUST, payload: lowerRangeBakingTime });
    dispatch({ type: CALCULATE_MAX_TIME_CUST, payload: upperRangeBakingTime });

    const outputString = createStringFromBakingTime(lowerRangeBakingTime, upperRangeBakingTime);
    dispatch({ type: SET_DISPLAY_TIME_CUST, payload: outputString });
  }
};

export const calculateYeast = () => (dispatch, getState) => {
  const state = getState();
  const { yeastTotalSetCust, altitude } = state.calculationFormCustomary;

  if (yeastTotalSetCust) {
    const adjustedYeast = calculateAdjustedYeast(yeastTotalSetCust, altitude);
    dispatch({ type: CALCULATE_YEAST_CUST, payload: adjustedYeast });

    const outputString = createStringFromTsp(adjustedYeast);
    dispatch({ type: SET_DISPLAY_YEAST_CUST, payload: outputString });
  }
};

export const calculateBakingPowder = () => (dispatch, getState) => {
  const state = getState();
  const { bakingPowderTotalSetCust, altitude } = state.calculationFormCustomary;

  if (bakingPowderTotalSetCust) {
    const adjustedBakingPowder = calculateAdjustedBakingPowderSoda(
      bakingPowderTotalSetCust,
      altitude
    );
    dispatch({ type: CALCULATE_BAKING_POWDER_CUST, payload: adjustedBakingPowder });

    const outputString = createStringFromTsp(adjustedBakingPowder);
    dispatch({ type: SET_DISPLAY_BAKING_POWDER_CUST, payload: outputString });
  }
};

export const calculateBakingSoda = () => (dispatch, getState) => {
  const state = getState();
  const { bakingSodaTotalSetCust, altitude } = state.calculationFormCustomary;

  if (bakingSodaTotalSetCust) {
    const adjustedBakingSoda = calculateAdjustedBakingPowderSoda(bakingSodaTotalSetCust, altitude);
    dispatch({ type: CALCULATE_BAKING_SODA_CUST, payload: adjustedBakingSoda });

    const outputString = createStringFromTsp(adjustedBakingSoda);
    dispatch({ type: SET_DISPLAY_BAKING_SODA_CUST, payload: outputString });
  }
};

export const ovenTempForDisplay = () => (dispatch, getState) => {
  const state = getState();

  const { ovenTempFarenSet } = state.calculationFormCustomary;

  const { minOvenTempCalc, maxOvenTempCalc } = state.calculationOutputCustomary;

  const ovenTempForDisplay = `${minOvenTempCalc} - ${maxOvenTempCalc}`;

  if (ovenTempFarenSet > 0) {
    dispatch({ type: SET_DISPLAY_TEMP_CUST, payload: ovenTempForDisplay });
  }
};

export const calculateTemp = () => dispatch => {
  dispatch(calculateMinTemp());
  dispatch(calculateMaxTemp());
  dispatch(ovenTempForDisplay());
};

export const calculateMaxTemp = input => (dispatch, getState) => {
  const state = getState();

  const tempToAddCustomary = 25;
  const { ovenTempFarenSet } = state.calculationFormCustomary;

  if (ovenTempFarenSet) {
    let maxTemp = parseInt(ovenTempFarenSet) + tempToAddCustomary;
    dispatch({ type: CALCULATE_MAX_OVEN_TEMP_CUST, payload: maxTemp });
  }
};

export const calculateMinTemp = input => (dispatch, getState) => {
  const state = getState();

  const tempToAddCustomary = 15;
  const { ovenTempFarenSet } = state.calculationFormCustomary;

  if (ovenTempFarenSet) {
    let minTemp = parseInt(ovenTempFarenSet) + tempToAddCustomary;
    dispatch({ type: CALCULATE_MIN_OVEN_TEMP_CUST, payload: minTemp });
  }
};

export const minMaxOutput = (minLiquid, maxLiquid) => dispatch => {
  dispatch({ type: CALCULATE_MIN_LIQUID_CUST, payload: minLiquid });
  dispatch({ type: CALCULATE_MAX_LIQUID_CUST, payload: maxLiquid });
};

/**
 * @summary
 * This group of functions handles our inputs and adds them to our redux state.
 *
 */
export const handleCustomaryInput = (inputId, inputValue) => dispatch => {
  const functionNames = {
    unitInput,
    altitudeInputCustomary,
    ovenTempInput,
    bakingPowderTspInput,
    bakingPowderPartialTspInput,
    bakingSodaTspInput,
    bakingSodaPartialTspInput,
    yeastTspInput,
    yeastPartialTspInput,
    bakingMinsInput,
    bakingHoursInput,
    flourCupsInput,
    flourTbspInput,
    flourPartialCupInput,
    liquidCupsInput,
    liquidPartialCupInput,
    liquidTbspInput,
    sugarCupsInput,
    sugarTbspInput,
    sugarPartialCupInput
  };

  dispatch(functionNames[inputId](inputValue));
  dispatch(caclulateTotalSugarInput());
  dispatch(calculateTotalFlourInput());
  dispatch(calculateTotalLiquidInput());
  dispatch(calculatTotalBakingPowderInput());
  dispatch(calculateTotalYeastInput());
  dispatch(calculateTotalBakingSodaInput());
};

export const flourPartialCupInput = flourPartialCup => {
  return { type: SET_FLOUR_PARTIAL_CUP, payload: flourPartialCup };
};

export const unitInput = selectedUnit => {
  return { type: SELECT_UNIT, payload: selectedUnit };
};

export const altitudeInputCustomary = altitude => {
  return { type: SET_ALTITUDE_FEET, payload: altitude };
};

export const ovenTempInput = ovenTemp => {
  return { type: SET_OVEN_TEMP_F, payload: ovenTemp };
};

export const bakingPowderTspInput = bakingPowderTspAmount => {
  return { type: SET_BAKING_POWDER_TSP, payload: bakingPowderTspAmount };
};

export const bakingPowderPartialTspInput = bakingPowderPartialTspAmount => {
  return { type: SET_BAKING_POWDER_PARTIAL_TSP, payload: bakingPowderPartialTspAmount };
};

export const bakingSodaTspInput = bakingSodaTspAmount => {
  return { type: SET_BAKING_SODA_TSP, payload: bakingSodaTspAmount };
};

export const bakingSodaPartialTspInput = bakingSodaPartialTspAmount => {
  return { type: SET_BAKING_SODA_PARTIAL_TSP, payload: bakingSodaPartialTspAmount };
};

export const yeastTspInput = yeastTspAmount => {
  return { type: SET_YEAST_TSP, payload: yeastTspAmount };
};

export const yeastPartialTspInput = yeastPartialTspAmount => {
  return { type: SET_YEAST_PARTIAL_TSP, payload: yeastPartialTspAmount };
};

export const bakingMinsInput = bakingMins => {
  return { type: SET_BAKING_MINS_CUST, payload: bakingMins };
};

export const bakingHoursInput = bakingHours => {
  return { type: SET_BAKING_HOURS_CUST, payload: bakingHours };
};

export const liquidCupsInput = liquidCups => {
  return { type: SET_LIQUID_CUPS, payload: liquidCups };
};

export const liquidPartialCupInput = liquidPartialCup => {
  return { type: SET_LIQUID_PARTIAL_CUP, payload: liquidPartialCup };
};

export const liquidTbspInput = liquidTbsp => {
  return { type: SET_LIQUID_TBSP, payload: liquidTbsp };
};

export const flourTbspInput = flourTbsp => {
  return { type: SET_FLOUR_TBSP, payload: flourTbsp };
};

export const flourCupsInput = flourCups => {
  return { type: SET_FLOUR_CUPS, payload: flourCups };
};

export const sugarCupsInput = sugarCups => {
  return { type: SET_SUGAR_CUPS, payload: sugarCups };
};

export const sugarTbspInput = sugarTbsp => {
  return { type: SET_SUGAR_TBSP, payload: sugarTbsp };
};

export const sugarPartialCupInput = sugarPartialCup => {
  return { type: SET_SUGAR_PARTIAL_CUP, payload: sugarPartialCup };
};

/**
 * @summary
 * These actions are used to deal with non-input form functions
 */
export const clearForm = () => {
  return { type: CLEAR_FORM };
};
