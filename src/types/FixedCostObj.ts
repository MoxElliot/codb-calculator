interface FixedCostObj {
  id: number
  name: string
  category: string
  amount: number | undefined   //Unsure why I have to type undefined here. In FixedCost DataInput, addFixedCostAction throws a type error on fixedCostAmount/Total.value if not set up this way here
  payPeriod: string
  individualTotal: number | undefined
}

export default FixedCostObj
