import { defineStore } from 'pinia'
import type VariableCostObj from '../types/VariableCostObj'
import type VariableCostState from '../types/VariableCostState'

export const useVariableCostStore = defineStore('variableCostStore', {
  state: (): VariableCostState => ({
    variableCosts: [
      { id: 1, name: 'New Camera', category: 'Equipment', total: 3200 },
      { id: 2, name: 'Ethernet Upgrade', category: 'Repair', total: 640 }
    ],
    totalVariableCosts: 0,
  }),
  
  actions: {
    addVariableCostAction(variableCost: VariableCostObj) {
      this.variableCosts.push(variableCost)
    },
  }
})