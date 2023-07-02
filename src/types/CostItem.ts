import type FixedCostsObj from './FixedCostObj'

type CostItem = {
  id: string
  name: string
  category: string
  amount: number
  frequency: string
  individualTotal: number
}

export default CostItem