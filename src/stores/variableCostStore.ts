import { defineStore } from 'pinia'
import type VariableCostObj from '../types/VariableCostObj'
import type VariableCostState from '../types/VariableCostState'

export const useVariableCostStore = defineStore('variableCostStore', {
  state: (): VariableCostState => ({
    variableCosts: [],
    totalVariableCosts: 0
  }),

  actions: {
    addVariableCostAction(variableCost: VariableCostObj) {
      this.variableCosts.push(variableCost)
    },
    
  }
})
