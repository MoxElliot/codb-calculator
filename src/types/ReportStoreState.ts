import type FixedCosts from './FixedCosts'

type ReportStoreState = {
  companyName: string
  fixedCosts: FixedCosts[]
  totalCosts: number
}

export default ReportStoreState
