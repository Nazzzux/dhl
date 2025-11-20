import { Box, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { set, useForm, useWatch } from 'react-hook-form'
import { CalculationFormFields, CalculationFormInitialValues, CalculationFormValues } from './types'

export const CalculationForm = () => {

  const { register, setValue, control, formState } = useForm<CalculationFormValues>({
    defaultValues: CalculationFormInitialValues
  })

  const [globalLowerLimit, globalUpperLimit, alternativeLowerLimit, alternativeUpperLimit, neededValue, alternativeRangeScaling, valueToLowerLimit, alternativeRangeWidth] = useWatch({
    control,
    name: [CalculationFormFields.GLOBAL_LOWER_LIMIT, CalculationFormFields.GLOBAL_UPPER_LIMIT, CalculationFormFields.ALTERNATIVE_LOWER_LIMIT, CalculationFormFields.ALTERNATIVE_UPPER_LIMIT, CalculationFormFields.NEEDED_VALUE, CalculationFormFields.ALTERNATIVE_RANGE_SCALING, CalculationFormFields.VALUE_TO_LOWER_LIMIT, CalculationFormFields.ALTERNATIVE_RANGE_WIDTH],
  })

  const [weightCoefficientOne, weightCoefficientTwo, weightCoefficientThree, weightCoefficientResultOne, weightCoefficientResultTwo, weightCoefficientResultThree] = useWatch({
    control,
    name: [CalculationFormFields.WEIGHT_COEFFICIENT_ONE, CalculationFormFields.WEIGHT_COEFFICIENT_TWO, CalculationFormFields.WEIGHT_COEFFICIENT_THREE, CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_ONE, CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_TWO, CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_THREE],
  })

  const [distributedValuesSum, totalValue, percent, interestRate] = useWatch({
    control,
    name: [CalculationFormFields.DISTRIBUTED_VALUES_SUM, CalculationFormFields.TOTAL_VALUE, CalculationFormFields.PERCENT, CalculationFormFields.INTEREST_RATE],
  })

  const [percentageBreakdownOne, percentageBreakdownTwo, percentageBreakdownThree, percentageBreakdownFour, percentageBreakdownFive] = useWatch({
    control,
    name: [CalculationFormFields.PERCENTAGE_BREAKDOWN_ONE, CalculationFormFields.PERCENTAGE_BREAKDOWN_TWO, CalculationFormFields.PERCENTAGE_BREAKDOWN_THREE, CalculationFormFields.PERCENTAGE_BREAKDOWN_FOUR, CalculationFormFields.PERCENTAGE_BREAKDOWN_FIVE],
  })

  const [byPercentOne, byPercentTwo, byPercentThree, byPercentFour, byPercentFive] = useWatch({
    control,
    name: [CalculationFormFields.BY_PERCENTAGE_ONE, CalculationFormFields.BY_PERCENTAGE_TWO, CalculationFormFields.BY_PERCENTAGE_THREE, CalculationFormFields.BY_PERCENTAGE_FOUR, CalculationFormFields.BY_PERCENTAGE_FIVE],
  })

  useEffect(() => {
    setValue(CalculationFormFields.BY_PERCENTAGE_ONE, String(Number(percentageBreakdownOne) * Number(interestRate) / 100))
  }, [percentageBreakdownOne, interestRate])

  useEffect(() => {
    setValue(CalculationFormFields.BY_PERCENTAGE_TWO, String(Number(percentageBreakdownTwo) * Number(interestRate) / 100))
  }, [percentageBreakdownTwo, interestRate])

  useEffect(() => {
    setValue(CalculationFormFields.BY_PERCENTAGE_THREE, String(Number(percentageBreakdownThree) * Number(interestRate) / 100))
  }, [percentageBreakdownThree, interestRate])

  useEffect(() => {
    setValue(CalculationFormFields.BY_PERCENTAGE_FOUR, String(Number(percentageBreakdownFour) * Number(interestRate) / 100))
  }, [percentageBreakdownFour, interestRate])

  useEffect(() => {
    setValue(CalculationFormFields.BY_PERCENTAGE_FIVE, String(Number(percentageBreakdownFive) * Number(interestRate) / 100))
  }, [percentageBreakdownFive, interestRate])

  useEffect(() => {
    setValue(CalculationFormFields.DISTRIBUTED_VALUES_SUM, String(Number(byPercentOne) + Number(byPercentTwo) + Number(byPercentThree) + Number(byPercentFour) + Number(byPercentFive) + Number(interestRate)))
  }, [byPercentOne, byPercentTwo, byPercentThree, byPercentFour, byPercentFive, interestRate])

  useEffect(() => {
    const limit = Number(globalUpperLimit) - Number(globalLowerLimit)
    setValue(CalculationFormFields.GLOBAL_RANGE_WIDTH, String(limit))
    setValue(CalculationFormFields.VALUE_TO_LOWER_LIMIT, String(Number(neededValue) - Number(globalLowerLimit)))
  }, [globalUpperLimit, globalLowerLimit, neededValue])

  useEffect(() => {
    const limit = Number(alternativeUpperLimit) - Number(alternativeLowerLimit)
    setValue(CalculationFormFields.ALTERNATIVE_RANGE_WIDTH, String(limit))
  }, [alternativeUpperLimit, alternativeLowerLimit])

  useEffect(() => {
    const result = (Number(valueToLowerLimit) * Number(alternativeRangeWidth)) / Number(alternativeLowerLimit)
    setValue(CalculationFormFields.ALTERNATIVE_RANGE_SCALING, isNaN(result) ? '0' : String(result))
  }, [valueToLowerLimit, alternativeLowerLimit, alternativeRangeWidth, setValue])

  useEffect(() => {
    const distributedSumByNeededValueDiv = Number(distributedValuesSum) / Number(neededValue)

    const sum = Number(weightCoefficientOne) + Number(weightCoefficientTwo) + Number(weightCoefficientThree)
    setValue(CalculationFormFields.WEIGHT_COEFFICIENT_SUM, String(isNaN(sum) ? '0' : sum))

    const coefficientOne = Number(weightCoefficientOne) * distributedSumByNeededValueDiv
    const coefficientTwo = Number(weightCoefficientTwo) * distributedSumByNeededValueDiv
    const coefficientThree = Number(weightCoefficientThree) * distributedSumByNeededValueDiv

    setValue(CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_ONE, String(isNaN(coefficientOne) ? '0' : coefficientOne))
    setValue(CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_TWO, String(isNaN(coefficientTwo) ? '0' : coefficientTwo))
    setValue(CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_THREE, String(isNaN(coefficientThree) ? '0' : coefficientThree))
  }, [distributedValuesSum, neededValue, weightCoefficientOne, weightCoefficientTwo, weightCoefficientThree])

  useEffect(() => {
    const sum = Number(weightCoefficientResultOne) + Number(weightCoefficientResultTwo) + Number(weightCoefficientResultThree)
    setValue(CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_SUM, String(sum))
  }, [weightCoefficientResultOne, weightCoefficientResultTwo, weightCoefficientResultThree])

  useEffect(() => {
    setValue(CalculationFormFields.TOTAL_VALUE, String(Number(alternativeLowerLimit) + Number(alternativeRangeScaling)))
  }, [alternativeLowerLimit, alternativeRangeScaling])

  useEffect(() => {
    setValue(CalculationFormFields.INTEREST_RATE, String((Number(totalValue) * Number(percent)) / 100))
  }, [totalValue, percent])

  return (
    <Box sx={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '40px 15px 0'  }}>


      <Box sx={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <TextField {...register(CalculationFormFields.GLOBAL_LOWER_LIMIT)} label="Global lower limit" fullWidth slotProps={{ input: { type: 'number' }}} />
        <TextField { ...register(CalculationFormFields.GLOBAL_UPPER_LIMIT)} label="Global upper limit" fullWidth slotProps={{ input: { type: 'number' }}} />
        <TextField { ...register(CalculationFormFields.GLOBAL_RANGE_WIDTH)} label="Global range width" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
        <TextField { ...register(CalculationFormFields.VALUE_TO_LOWER_LIMIT)} label="Value to lower limit" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
      </Box>


      <Box sx={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <TextField {...register(CalculationFormFields.ALTERNATIVE_LOWER_LIMIT)} label="Alternative lower limit" fullWidth slotProps={{ input: { type: 'number' }}} />
        <TextField {...register(CalculationFormFields.ALTERNATIVE_UPPER_LIMIT)} label="Alternative upper limit" fullWidth slotProps={{ input: { type: 'number' }}} />
        <TextField {...register(CalculationFormFields.ALTERNATIVE_RANGE_WIDTH)} label="Alternative range width" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
      </Box>


      <Box sx={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <TextField {...register(CalculationFormFields.NEEDED_VALUE)} label="Needed value" fullWidth slotProps={{ input: { type: 'number' }}} />
        <TextField {...register(CalculationFormFields.PERCENT)} label="Percent" fullWidth slotProps={{ input: { type: 'number' }}} />
      </Box>


      <Box sx={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
          <TextField {...register(CalculationFormFields.WEIGHT_COEFFICIENT_ONE)} label="Weight coefficient" fullWidth slotProps={{ input: { type: 'number' }}} />
          <TextField {...register(CalculationFormFields.WEIGHT_COEFFICIENT_TWO)} label="Weight coefficient" fullWidth slotProps={{ input: { type: 'number' }}} />
          <TextField {...register(CalculationFormFields.WEIGHT_COEFFICIENT_THREE)} label="Weight coefficient" fullWidth slotProps={{ input: { type: 'number' }}} />
          <TextField {...register(CalculationFormFields.WEIGHT_COEFFICIENT_SUM)} label="Weight coefficient sum" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
          <TextField {...register(CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_ONE)} label="Weight coefficient result" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
          <TextField {...register(CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_TWO)} label="Weight coefficient result" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
          <TextField {...register(CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_THREE)} label="Weight coefficient result" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
          <TextField {...register(CalculationFormFields.WEIGHT_COEFFICIENT_RESULT_SUM)} label="Weight coefficient result sum" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
        </Box>
      </Box>


      <Box sx={{ marginBottom: '20px', width: '100%', display: 'flex' }}>
        <TextField {...register(CalculationFormFields.INTEREST_RATE)} label="Interest rate, %" slotProps={{ input: { type: 'number', readOnly: true }}} sx={{ marginLeft: 'auto', width: 'calc(50% - 10px)' }} />
      </Box>


      <Box sx={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
          <TextField {...register(CalculationFormFields.PERCENTAGE_BREAKDOWN_ONE)} label="Percentage breakdown" fullWidth slotProps={{ input: { type: 'number' }}} />
          <TextField {...register(CalculationFormFields.PERCENTAGE_BREAKDOWN_TWO)} label="Percentage breakdown" fullWidth slotProps={{ input: { type: 'number' }}} />
          <TextField {...register(CalculationFormFields.PERCENTAGE_BREAKDOWN_THREE)} label="Percentage breakdown" fullWidth slotProps={{ input: { type: 'number' }}} />
          <TextField {...register(CalculationFormFields.PERCENTAGE_BREAKDOWN_FOUR)} label="Percentage breakdown" fullWidth slotProps={{ input: { type: 'number' }}} />
          <TextField {...register(CalculationFormFields.PERCENTAGE_BREAKDOWN_FIVE)} label="Percentage breakdown" fullWidth slotProps={{ input: { type: 'number' }}} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
          <TextField {...register(CalculationFormFields.BY_PERCENTAGE_ONE)} label="Value by percentage" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
          <TextField {...register(CalculationFormFields.BY_PERCENTAGE_TWO)} label="Value by percentage" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
          <TextField {...register(CalculationFormFields.BY_PERCENTAGE_THREE)} label="Value by percentage" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
          <TextField {...register(CalculationFormFields.BY_PERCENTAGE_FOUR)} label="Value by percentage" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
          <TextField {...register(CalculationFormFields.BY_PERCENTAGE_FIVE)} label="Value by percentage" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
          <TextField {...register(CalculationFormFields.DISTRIBUTED_VALUES_SUM)} label="Sum" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
        </Box>
      </Box>

      <Box sx={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <TextField {...register(CalculationFormFields.ALTERNATIVE_RANGE_SCALING)} label="Alternative range scaling" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
        <TextField {...register(CalculationFormFields.TOTAL_VALUE)} label="Total value" fullWidth slotProps={{ input: { type: 'number', readOnly: true }}} />
      </Box>

    </Box>
  )
}
