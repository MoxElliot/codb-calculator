import type VariableCostObj from './VariableCostObj'
import type FixedCostObj from './FixedCostObj'

interface reportState {
  companyName: string
  bookingsPerMonth: number
  priceAveragePerBooking: number
  hoursAveragePerBooking: number
  variableCosts: VariableCostObj[]
  totalVariableCosts: number
  fixedCosts: FixedCostObj[]
  totalFixedCosts: number
  payPerMonth: number
  savingsPerMonth: number
  userEmail: string
  inputValid: boolean
  blankSubmitError: string
  fixedFormValid: boolean
  variableFormValid: boolean
  selectedCost: {
    id: string,
    name: string,
    category: string,
    amount: number,
    frequency: string,
    individualTotal: number
  }
  selectedId: string
  selectedName:string
}

export default reportState
