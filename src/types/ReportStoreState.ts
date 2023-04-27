import type FixedCosts from './FixedCostObj'
import type VariableCosts from './VariableCosts'

type ReportStoreState = {
  companyName: string
  fixedCosts: FixedCosts[]
  totalFixedCosts: number
  variableCosts: VariableCosts[]
}

export default ReportStoreState
