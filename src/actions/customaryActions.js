import {
    SELECT_UNIT,
    CLEAR_FORM,
    SET_ALTITUDE,
    SET_OVEN_TEMP,
    SET_LIQUID_CUPS,
    SET_LIQUID_PARTIAL_CUP,
    SET_LIQUID_TBSP,
    SET_FLOUR,
    SET_FLOUR_CUPS,
    SET_FLOUR_TBSP,
    SET_BAKING_POWDER,
    SET_BAKING_POWDER_TSP,
    SET_BAKING_POWDER_PARTIAL_TSP,
    SET_YEAST,
    SET_YEAST_TSP,
    SET_YEAST_PARTIAL_TSP,
    SET_BAKING_TIME,
    SET_BAKING_MINS,
    SET_BAKING_HOURS,
    CALCULATE_MIN_OVEN_TEMP,
    CALCULATE_MAX_OVEN_TEMP,
    CALCULATE_MIN_TIME,
    CALCULATE_MAX_TIME,
    CALCULATE_BAKING_POWDER,
    SET_DISPLAY_TEMP,
    CALCULATE_YEAST,
    SET_DISPLAY_TIME,
    CALCULATE_FLOUR,
    SET_DISPLAY_FLOUR,
    CALCULATE_MIN_LIQUID,
    CALCULATE_MAX_LIQUID,
    SET_DISPLAY_LIQUID,
    SET_SUGAR_CUPS,
    SET_SUGAR_TBSP,
    SET_SUGAR_PARTIAL_CUP,
    SET_SUGAR_TOTAL,
    SET_DISPLAY_SUGAR,
    CALCULATE_SUGAR,
    SET_FLOUR_PARTIAL_CUP,
    SET_FLOUR_TOTAL,
    SET_LIQUID_TOTAL,
    SET_BAKING_POWDER_TOTAL,
    SET_YEAST_TOTAL,
    SET_DISPLAY_YEAST,
    SET_DISPLAY_BAKING_POWDER
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
    calculateAdjustedBakingPowder,
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
    dispatch(calculateYeast());
  };
  
  export const calculatTotalBakingPowderInput = () => (dispatch, getState) => {
    const state = getState();
  
    const { bakingPowderTspSet, bakingPowderPartialTspSet } = state.calculationForm;
  
    let totalTsp = convertToTsp(bakingPowderTspSet, bakingPowderPartialTspSet);
  
    dispatch({ type: SET_BAKING_POWDER_TOTAL, payload: totalTsp });
  };
  
  export const calculateTotalYeastInput = () => (dispatch, getState) => {
    const state = getState();
  
    const { yeastTspSet, yeastPartialTspSet } = state.calculationForm;
  
    let totalTsp = convertToTsp(yeastTspSet, yeastPartialTspSet);
  
    dispatch({ type: SET_YEAST_TOTAL, payload: totalTsp });
  };
  
  export const calculateTotalLiquidInput = () => (dispatch, getState) => {
    const state = getState();
  
    const { liquidCupsSet, liquidPartialCupSet, liquidTbspSet } = state.calculationForm;
  
    let totalTbsp = convertToTbsp(liquidCupsSet, liquidPartialCupSet, liquidTbspSet);
  
    dispatch({ type: SET_LIQUID_TOTAL, payload: totalTbsp });
  };
  
  export const caclulateTotalSugarInput = () => (dispatch, getState) => {
    const state = getState();
  
    const { sugarCupsSet, sugarPartialCupSet, sugarTbspSet } = state.calculationForm;
  
    let totalTbsp = convertToTbsp(sugarCupsSet, sugarPartialCupSet, sugarTbspSet);
  
    dispatch({ type: SET_SUGAR_TOTAL, payload: totalTbsp });
  };
  
  export const calculateTotalFlourInput = () => (dispatch, getState) => {
    const state = getState();
  
    const { flourCupsSet, flourPartialCupSet, flourTbspSet } = state.calculationForm;
  
    let totalTbsp = convertToTbsp(flourCupsSet, flourPartialCupSet, flourTbspSet);
    dispatch({ type: SET_FLOUR_TOTAL, payload: totalTbsp });
  };
  
  export const calculateLiquid = () => (dispatch, getState) => {
    const state = getState();
  
    const { liquidTotalSet, altitude } = state.calculationForm;
  
    if (liquidTotalSet) {
      const adjustedLiquid = calculateAdjustedLiquid(liquidTotalSet, altitude);
      dispatch({ type: CALCULATE_MIN_LIQUID, payload: adjustedLiquid.minTbspTotal });
      dispatch({ type: CALCULATE_MAX_LIQUID, payload: adjustedLiquid.maxTbspTotal });
  
      const minString = createStringFromTbsp(adjustedLiquid.minTbspTotal);
      const maxString = createStringFromTbsp(adjustedLiquid.maxTbspTotal);
      const outputString = `${minString} - ${maxString}`;
      dispatch({ type: SET_DISPLAY_LIQUID, payload: outputString });
    }
  };
  
  export const calculateSugar = () => (dispatch, getState) => {
    const state = getState();
  
    const { sugarTotalSet, altitude } = state.calculationForm;
  
    if (sugarTotalSet) {
      const adjustedSugar = calculateAdjustedSugar(sugarTotalSet, altitude);
      dispatch({ type: CALCULATE_SUGAR, payload: adjustedSugar });
  
      const outputString = createStringFromTbsp(adjustedSugar);
      dispatch({ type: SET_DISPLAY_SUGAR, payload: outputString });
    }
  };
  
  export const calculateFlour = () => (dispatch, getState) => {
    const state = getState();
  
    const { flourTotalSet, altitude } = state.calculationForm;
  
    if (flourTotalSet) {
      const adjustedFlour = calculateAdjustedFlour(flourTotalSet, altitude);
      dispatch({ type: CALCULATE_FLOUR, payload: adjustedFlour });
  
      const outputString = createStringFromTbsp(adjustedFlour);
      dispatch({ type: SET_DISPLAY_FLOUR, payload: outputString });
    }
  };
  
  export const calculateBakingTime = () => (dispatch, getState) => {
    const state = getState();
  
    const { bakingHoursSet, bakingMinsSet, altitude } = state.calculationForm;
  
    if (bakingMinsSet || bakingHoursSet) {
      const adjustedbakingTime = calculateAdjustedBakingTime(bakingHoursSet, bakingMinsSet, altitude);
      const { lowerRangeBakingTime, upperRangeBakingTime } = adjustedbakingTime;
      dispatch({ type: CALCULATE_MIN_TIME, payload: lowerRangeBakingTime });
      dispatch({ type: CALCULATE_MAX_TIME, payload: upperRangeBakingTime });
  
      const outputString = createStringFromBakingTime(lowerRangeBakingTime, upperRangeBakingTime);
      dispatch({ type: SET_DISPLAY_TIME, payload: outputString });
    }
  };
  
  export const calculateYeast = () => (dispatch, getState) => {
    const state = getState();
    const { yeastTotalSet, altitude } = state.calculationForm;
  
    if (yeastTotalSet) {
      const adjustedYeast = calculateAdjustedYeast(yeastTotalSet, altitude);
      dispatch({ type: CALCULATE_YEAST, payload: adjustedYeast });
  
      const outputString = createStringFromTsp(adjustedYeast);
      dispatch({ type: SET_DISPLAY_YEAST, payload: outputString });
    }
  };
  
  export const calculateBakingPowder = () => (dispatch, getState) => {
    const state = getState();
    const { bakingPowderTotalSet, altitude } = state.calculationForm;
  
    if (bakingPowderTotalSet) {
      const adjustedBakingPowder = calculateAdjustedBakingPowder(bakingPowderTotalSet, altitude);
      dispatch({ type: CALCULATE_BAKING_POWDER, payload: adjustedBakingPowder });
  
      const outputString = createStringFromTsp(adjustedBakingPowder);
      dispatch({ type: SET_DISPLAY_BAKING_POWDER, payload: outputString });
    }
  };
  
  export const ovenTempForDisplay = () => (dispatch, getState) => {
    const state = getState();
  
    const { ovenTempSet } = state.calculationForm;
  
    const { minOvenTempCalc, maxOvenTempCalc } = state.calculationOutput;
  
    const ovenTempForDisplay = `${minOvenTempCalc} - ${maxOvenTempCalc}`;
  
    if (ovenTempSet > 0) {
      dispatch({ type: SET_DISPLAY_TEMP, payload: ovenTempForDisplay });
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
    const tempToAddMetric = 14;
  
    const { unit } = state.calculationForm;
    const { ovenTempSet } = state.calculationForm;
    if (ovenTempSet) {
      if (unit === 'customary') {
        let maxTemp = parseInt(ovenTempSet) + tempToAddCustomary;
        dispatch({ type: CALCULATE_MAX_OVEN_TEMP, payload: maxTemp });
      } else if (unit === 'metric') {
        let maxTemp = parseInt(ovenTempSet) + tempToAddMetric;
        dispatch({ type: CALCULATE_MAX_OVEN_TEMP, payload: maxTemp });
      }
    }
  };
  
  export const calculateMinTemp = input => (dispatch, getState) => {
    const state = getState();
  
    const tempToAddCustomary = 15;
    const tempToAddMetric = 8;
  
    const { unit } = state.calculationForm;
    const { ovenTempSet } = state.calculationForm;
  
    if (ovenTempSet) {
      if (unit === 'customary') {
        let minTemp = parseInt(ovenTempSet) + tempToAddCustomary;
        dispatch({ type: CALCULATE_MIN_OVEN_TEMP, payload: minTemp });
      } else if (unit === 'metric') {
        let minTemp = parseInt(ovenTempSet) + tempToAddMetric;
        dispatch({ type: CALCULATE_MIN_OVEN_TEMP, payload: minTemp });
      }
    }
  };
  
  export const minMaxOutput = (minLiquid, maxLiquid) => dispatch => {
    dispatch({ type: CALCULATE_MIN_LIQUID, payload: minLiquid });
    dispatch({ type: CALCULATE_MAX_LIQUID, payload: maxLiquid });
  };
  
  /**
   * @summary
   * This group of functions handles our inputs and adds them to our redux state.
   *
   */
  export const handleCustomaryInput = (inputId, inputValue) => dispatch => {
    const functionNames = {
      unitInput,
      altitudeInput,
      ovenTempInput,
      bakingTimeInput,
      bakingPowderInput,
      bakingPowderTspInput,
      bakingPowderPartialTspInput,
      yeastInput,
      yeastTspInput,
      yeastPartialTspInput,
      bakingMinsInput,
      bakingHoursInput,
      flourInput,
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
  };
  
  export const flourPartialCupInput = flourPartialCup => {
    return { type: SET_FLOUR_PARTIAL_CUP, payload: flourPartialCup };
  };
  
  export const unitInput = selectedUnit => {
    return { type: SELECT_UNIT, payload: selectedUnit };
  };
  
  export const altitudeInput = altitude => {
    return { type: SET_ALTITUDE, payload: altitude };
  };
  
  export const ovenTempInput = ovenTemp => {
    return { type: SET_OVEN_TEMP, payload: ovenTemp };
  };
  
  export const bakingTimeInput = bakingTime => {
    return { type: SET_BAKING_TIME, payload: bakingTime };
  };
  
  export const flourInput = flourAmount => {
    return { type: SET_FLOUR, payload: flourAmount };
  };
  
  export const bakingPowderInput = bakingPowderAmount => {
    return { type: SET_BAKING_POWDER, payload: bakingPowderAmount };
  };
  
  export const bakingPowderTspInput = bakingPowderTspAmount => {
    return { type: SET_BAKING_POWDER_TSP, payload: bakingPowderTspAmount };
  };
  
  export const bakingPowderPartialTspInput = bakingPowderPartialTspAmount => {
    return { type: SET_BAKING_POWDER_PARTIAL_TSP, payload: bakingPowderPartialTspAmount };
  };
  
  export const yeastInput = yeastAmount => {
    return { type: SET_YEAST, payload: yeastAmount };
  };
  
  export const yeastTspInput = yeastTspAmount => {
    return { type: SET_YEAST_TSP, payload: yeastTspAmount };
  };
  
  export const yeastPartialTspInput = yeastPartialTspAmount => {
    return { type: SET_YEAST_PARTIAL_TSP, payload: yeastPartialTspAmount };
  };
  
  export const bakingMinsInput = bakingMins => {
    return { type: SET_BAKING_MINS, payload: bakingMins };
  };
  
  export const bakingHoursInput = bakingHours => {
    return { type: SET_BAKING_HOURS, payload: bakingHours };
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
  