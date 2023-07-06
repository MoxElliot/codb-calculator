import type CostObj from './CostObj'
import type CostItem from './CostItem'

interface reportState {
  companyName: string
  bookingsPerMonth: number
  priceAveragePerBooking: number
  hoursAveragePerBooking: number
  variableCosts: CostObj[]
  fixedCosts: CostObj[]
  totalCosts:number
  totalVariableCosts: number
  totalFixedCosts: number
  payPerMonth: number
  savingsPerMonth: number
  userEmail: string
  inputValid: boolean
  blankSubmitError: string
  fixedFormValid: boolean
  variableFormValid: boolean
  selectedCost: CostItem
  selectedId: string
  selectedName:string
}

export default reportState
