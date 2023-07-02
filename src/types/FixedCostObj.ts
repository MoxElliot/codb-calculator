interface FixedCostObj {
  id: string 
  name: string
  category: string
  amount: number | null 
  frequency: string
  individualTotal: number
  index?: number
}

export default FixedCostObj
