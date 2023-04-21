import { defineStore } from 'pinia'
import type FixedCosts from '../types/FixedCosts'
import type ReportStoreState from '../types/ReportStoreState'

export const useReportStore = defineStore('reportStore', {
  state: (): ReportStoreState => ({
    companyName: 'PhotoBomb',
    fixedCosts: [
      { id: 1, name: 'Rent', category: 'Overhead', amount: 1000, payPeriod: 'monthly' },
      { id: 2, name: 'Parking', category: 'Overhead', amount: 80, payPeriod: 'weekly' }
    ],
    totalCosts: 100
  }),
  getters: {
    totalFixedCosts({ fixedCosts }): number {
      const sum = fixedCosts
        .map((item) => item.amount)
        .reduce((a, b) => {
          return a + b
        })
      return sum
    }
  },
  actions: {
    addFixedCostAction(fixedCost: FixedCosts) {
      this.fixedCosts.push(fixedCost) 
    },
    addCompanyNameAction(companyName: string) {
      this.companyName = companyName 
    }
  }
})