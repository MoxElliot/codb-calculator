import { defineStore } from 'pinia'
import type FixedCostObj from '../types/FixedCostObj'
import type FixedCostState from '../types/FixedCostState'
import payPeriodOptionsArray from '@/assets/payPeriodOptionsArray'

export const useFixedCostStore = defineStore('fixedCostStore', {
  state: (): FixedCostState => ({
    fixedCosts: [],
    totalFixedCosts: 0
  }),
  actions: {
    totalFixedCostAction() {
      let costArr: number[] = []
      Object.entries(this.fixedCosts).forEach(([key, val]) => {
        costArr.push(Number(val.individualTotal)) //Unsure why amount is a string, my data-input is typed to number
      })
      this.totalFixedCosts = costArr.reduce((a, b) => a + b)
    },
    addFixedCostAction(fixedCost: FixedCostObj) {
      const payPeriodMultiplierElement = payPeriodOptionsArray.find(
        (ele) => ele.day === fixedCost.payPeriod
      )
      const payPeriodMultiplier: any = payPeriodMultiplierElement?.multiplier

      fixedCost.individualTotal = fixedCost.amount * payPeriodMultiplier
      this.fixedCosts.push(fixedCost)
      this.totalFixedCostAction()
    }
  }
})
