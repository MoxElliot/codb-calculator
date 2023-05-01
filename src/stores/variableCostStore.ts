import { defineStore } from 'pinia'
import type VariableCostObj from '../types/VariableCostObj'
import type VariableCostState from '../types/VariableCostState'

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
      this.totalVariableCosts = costArr.reduce((a, b) => a + b)
    },
    addVariableCostAction(variableCost: VariableCostObj) {
      this.variableCosts.push(variableCost)
      this.totalVariableCostAction()
      // variableCost.name = ''
      // variableCost.category = ''
      // variableCost.amount = 0
    }
  }
})
