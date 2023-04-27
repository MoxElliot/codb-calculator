import { defineStore } from 'pinia'
import type FixedCostObj from '../types/FixedCostObj'
import type FixedCostState from '../types/FixedCostState'

export const useFixedCostStore = defineStore('fixedCostStore', {
  state: (): FixedCostState => ({
    fixedCosts: [
      {
        id: 1,
        name: 'Rent',
        category: 'Overhead',
        amount: 1000,
        payPeriod: 'Monthly',
        total: 12000
      },
      { id: 2, name: 'Parking', category: 'Overhead', amount: 80, payPeriod: 'Weekly', total: 4160 }
    ],
    totalFixedCosts: 100,
  }),
  actions: {
    addFixedCostAction(fixedCost: FixedCostObj) {
      this.fixedCosts.push(fixedCost)
    },
  }
})
