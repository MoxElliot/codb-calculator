import { defineStore } from 'pinia'
import type FixedCostObj from '../types/FixedCostObj'
import type FixedCostState from '../types/FixedCostState'
import payPeriodObject from '@/assets/payPeriodObject'

export const useFixedCostStore = defineStore('fixedCostStore', {
  state: (): FixedCostState => ({
    fixedCosts: [],
    totalFixedCosts: 0
  }),
  actions: {
    totalFixedCostAction() {
      let costArr: number[] = []
      Object.entries(this.fixedCosts).forEach(([key, val]) => {
        costArr.push(Number(val.amount)) //Unsure why amount is a string, my data-input is typed to number
      })
      this.totalFixedCosts = costArr.reduce((a,b) => a + b)
    },
    addFixedCostAction(fixedCost: FixedCostObj) {
      console.log(payPeriodObject.weekly)
      console.log(fixedCost.payPeriod)
      const period = fixedCost.payPeriod
      console.log(period)
      fixedCost.individualTotal = fixedCost.amount * 4
      this.fixedCosts.push(fixedCost)
      this.totalFixedCostAction()
    },
  }
})
