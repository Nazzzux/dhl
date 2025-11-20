export const CalculationFormFields = {
  GLOBAL_LOWER_LIMIT: 'globalLowerLimit',
  GLOBAL_UPPER_LIMIT: 'globalUpperLimit',
  GLOBAL_RANGE_WIDTH: 'globalRangeWidth',
  VALUE_TO_LOWER_LIMIT: 'valueToLowerLimit',
  
  ALTERNATIVE_LOWER_LIMIT: 'alternativeLowerLimit',
  ALTERNATIVE_UPPER_LIMIT: 'alternativeUpperLimit',
  ALTERNATIVE_RANGE_WIDTH: 'alternativeRangeWidth',
  ALTERNATIVE_RANGE_SCALING: 'alternativeRangeScaling',
  TOTAL_VALUE: 'totalValue',
  
  NEEDED_VALUE: 'neededValue',
  PERCENT: 'percent',
  INTEREST_RATE: 'interestRate',

  WEIGHT_COEFFICIENT_ONE: 'weightCoefficientOne',
  WEIGHT_COEFFICIENT_TWO: 'weightCoefficientTwo',
  WEIGHT_COEFFICIENT_THREE: 'weightCoefficientThree',
  WEIGHT_COEFFICIENT_SUM: 'weightCoefficientSum',
  WEIGHT_COEFFICIENT_RESULT_ONE: 'weightCoefficientResultOne',
  WEIGHT_COEFFICIENT_RESULT_TWO: 'weightCoefficientResultTwo',
  WEIGHT_COEFFICIENT_RESULT_THREE: 'weightCoefficientResultThree',
  WEIGHT_COEFFICIENT_RESULT_SUM: 'weightCoefficientResultSum',

  PERCENTAGE_BREAKDOWN_ONE: 'percentageBreakdownOne',
  PERCENTAGE_BREAKDOWN_TWO: 'percentageBreakdownTwo',
  PERCENTAGE_BREAKDOWN_THREE: 'percentageBreakdownThree',
  PERCENTAGE_BREAKDOWN_FOUR: 'percentageBreakdownFour',
  PERCENTAGE_BREAKDOWN_FIVE: 'percentageBreakdownFive',

  BY_PERCENTAGE_ONE: 'byPercentageOne',
  BY_PERCENTAGE_TWO: 'byPercentageTwo',
  BY_PERCENTAGE_THREE: 'byPercentageThree',
  BY_PERCENTAGE_FOUR: 'byPercentageFour',
  BY_PERCENTAGE_FIVE: 'byPercentageFive',

  DISTRIBUTED_VALUES_SUM: 'distributedValuesSum',
}

export interface CalculationFormValues {
  [CalculationFormFields.GLOBAL_LOWER_LIMIT]: string;
  [CalculationFormFields.GLOBAL_UPPER_LIMIT]: string;
  [CalculationFormFields.GLOBAL_RANGE_WIDTH]: string;
  [CalculationFormFields.VALUE_TO_LOWER_LIMIT]: string;

  [CalculationFormFields.ALTERNATIVE_LOWER_LIMIT]: string;
  [CalculationFormFields.ALTERNATIVE_UPPER_LIMIT]: string;
  [CalculationFormFields.ALTERNATIVE_RANGE_WIDTH]: string;
  [CalculationFormFields.ALTERNATIVE_RANGE_SCALING]: string;
  [CalculationFormFields.TOTAL_VALUE]: string;

  [CalculationFormFields.NEEDED_VALUE]: string;
  [CalculationFormFields.PERCENT]: string;
  [CalculationFormFields.INTEREST_RATE]: string;

  [CalculationFormFields.WEIGHT_COEFFICIENT_ONE]: string;
  [CalculationFormFields.WEIGHT_COEFFICIENT_TWO]: string;
  [CalculationFormFields.WEIGHT_COEFFICIENT_THREE]: string;
  [CalculationFormFields.WEIGHT_COEFFICIENT_SUM]: string;
  [CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_ONE]: string;
  [CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_TWO]: string;
  [CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_THREE]: string;
  [CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_SUM]: string;

  [CalculationFormFields.PERCENTAGE_BREAKDOWN_ONE]: string;
  [CalculationFormFields.PERCENTAGE_BREAKDOWN_TWO]: string;
  [CalculationFormFields.PERCENTAGE_BREAKDOWN_THREE]: string;
  [CalculationFormFields.PERCENTAGE_BREAKDOWN_FOUR]: string;
  [CalculationFormFields.PERCENTAGE_BREAKDOWN_FIVE]: string;
  [CalculationFormFields.BY_PERCENTAGE_ONE]: string;
  [CalculationFormFields.BY_PERCENTAGE_TWO]: string;
  [CalculationFormFields.BY_PERCENTAGE_THREE]: string;
  [CalculationFormFields.BY_PERCENTAGE_FOUR]: string;
  [CalculationFormFields.BY_PERCENTAGE_FIVE]: string;

  [CalculationFormFields.DISTRIBUTED_VALUES_SUM]: string
}

export const CalculationFormInitialValues = {
  [CalculationFormFields.GLOBAL_LOWER_LIMIT]: '0',
  [CalculationFormFields.GLOBAL_UPPER_LIMIT]: '0',
  [CalculationFormFields.GLOBAL_RANGE_WIDTH]: '0',
  [CalculationFormFields.VALUE_TO_LOWER_LIMIT]: '0',

  [CalculationFormFields.ALTERNATIVE_LOWER_LIMIT]: '0',
  [CalculationFormFields.ALTERNATIVE_UPPER_LIMIT]: '0',
  [CalculationFormFields.ALTERNATIVE_RANGE_WIDTH]: '0',
  [CalculationFormFields.ALTERNATIVE_RANGE_SCALING]: '0',
  [CalculationFormFields.TOTAL_VALUE]: '0',

  [CalculationFormFields.NEEDED_VALUE]: '0',
  [CalculationFormFields.PERCENT]: '0',
  [CalculationFormFields.INTEREST_RATE]: '0',

  [CalculationFormFields.WEIGHT_COEFFICIENT_ONE]: '0',
  [CalculationFormFields.WEIGHT_COEFFICIENT_TWO]: '0',
  [CalculationFormFields.WEIGHT_COEFFICIENT_THREE]: '0',
  [CalculationFormFields.WEIGHT_COEFFICIENT_SUM]: '0',
  [CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_ONE]: '0',
  [CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_TWO]: '0',
  [CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_THREE]: '0',
  [CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_SUM]: '0',

  [CalculationFormFields.PERCENTAGE_BREAKDOWN_ONE]: '0',
  [CalculationFormFields.PERCENTAGE_BREAKDOWN_TWO]: '0',
  [CalculationFormFields.PERCENTAGE_BREAKDOWN_THREE]: '0',
  [CalculationFormFields.PERCENTAGE_BREAKDOWN_FOUR]: '0',
  [CalculationFormFields.PERCENTAGE_BREAKDOWN_FIVE]: '0',
  [CalculationFormFields.BY_PERCENTAGE_ONE]: '0',
  [CalculationFormFields.BY_PERCENTAGE_TWO]: '0',
  [CalculationFormFields.BY_PERCENTAGE_THREE]: '0',
  [CalculationFormFields.BY_PERCENTAGE_FOUR]: '0',
  [CalculationFormFields.BY_PERCENTAGE_FIVE]: '0',

  [CalculationFormFields.DISTRIBUTED_VALUES_SUM]: '0'
}