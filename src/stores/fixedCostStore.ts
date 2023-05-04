import { defineStore } from 'pinia'
import type FixedCostObj from '../types/FixedCostObj'
import type FixedCostState from '../types/FixedCostState'
import payPeriodOptionsArray from '@/assets/payPeriodOptionsArray'
import formatMoney from '../assets/utility_functions/formatMoney'

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
      const totalNum: number = costArr.reduce((a, b) => a + b)
      this.totalFixedCosts = formatMoney(totalNum)
    },
    addFixedCostAction(fixedCost: FixedCostObj) {
      const payPeriodMultiplierElement = payPeriodOptionsArray.find(
        (ele) => ele.day === fixedCost.payPeriod
      )
      const payPeriodMultiplier: any = payPeriodMultiplierElement?.multiplier

      const totalNum: number = (fixedCost.amount as number) * payPeriodMultiplier
      fixedCost.individualTotal = formatMoney(totalNum)
      this.fixedCosts.push(fixedCost)
      this.totalFixedCostAction()
    }
  }
})
