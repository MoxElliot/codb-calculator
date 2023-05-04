import { defineStore } from 'pinia'
import type VariableCostObj from '../types/VariableCostObj'
import type VariableCostState from '../types/VariableCostState'
import formatMoney from '../assets/utility_functions/formatMoney'

export const useVariableCostStore = defineStore('variableCostStore', {
  state: (): VariableCostState => ({
    variableCosts: [],
    totalVariableCosts: 0
  }),

  actions: {
    totalVariableCostAction() {
      let costArr: number[] = []
      Object.entries(this.variableCosts).forEach(([key, val]) => {
        costArr.push(Number(val.amount)) //Unsure why amount is a string, my data-input is typed to number
      })
      const totalNum: number = costArr.reduce((a, b) => a + b)
      this.totalVariableCosts = formatMoney(totalNum)
    },
    addVariableCostAction(variableCost: VariableCostObj) {
      this.variableCosts.push(variableCost)
      this.totalVariableCostAction()
    }
  }
})
