import type FixedCosts from './FixedCosts'
import type VariableCosts from './VariableCosts'

type ReportStoreState = {
  companyName: string
  fixedCosts: FixedCosts[]
  totalFixedCosts: number
  variableCosts: VariableCosts[]
}

export default ReportStoreState
