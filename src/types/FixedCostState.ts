import type FixedCostsObj from './FixedCostObj'

type FixedCostState = {
  id: string
  name: string
  category: string
  amount: number
  frequency: string
  individualTotal: number
}

export default FixedCostState