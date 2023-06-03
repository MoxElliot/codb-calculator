interface FixedCostObj {
  id: number
  name: string
  category: string
  amount: number | null | undefined
  payPeriod: string
  individualTotal: number
}

export default FixedCostObj
