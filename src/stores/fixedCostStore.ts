import { defineStore } from 'pinia'
import type FixedCostObj from '../types/FixedCostObj'
import type FixedCostState from '../types/FixedCostState'

export const useFixedCostStore = defineStore('fixedCostStore', {
  state: (): FixedCostState => ({
    fixedCosts: [],
    totalFixedCosts: 0
  }),
  actions: {
    addFixedCostAction(fixedCost: FixedCostObj) {
      this.fixedCosts.push(fixedCost)
    }
  }
})
