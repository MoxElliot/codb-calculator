import type VariableCostObj from './VariableCostObj'
import type FixedCostObj from './FixedCostObj'

interface reportState {
  companyName: string
  bookingsPerMonth: number | null
  priceAveragePerBooking: number | null
  hoursAveragePerBooking: number | null
  variableCosts: VariableCostObj[]
  totalVariableCosts: number
  fixedCosts: FixedCostObj[]
  totalFixedCosts: number
  payPerMonth: number
  savingsPerMonth: number
  userEmail: string
  inputValid: boolean
  blankSubmitError: string,
  fixedFormValid: boolean,
  variableFormValid: boolean,
}

export default reportState
