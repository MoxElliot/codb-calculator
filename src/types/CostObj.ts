interface CostObj {
  id: string 
  name: string
  category: string
  amount: number | null 
  frequency?: string
  individualTotal?: number
}

export default CostObj
