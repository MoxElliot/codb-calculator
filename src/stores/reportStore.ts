import { defineStore } from 'pinia'
import type FixedCosts from '../types/FixedCosts'
import type VariableCosts from '../types/VariableCosts'
import type ReportStoreState from '../types/ReportStoreState'
import payPeriodObject from'../assets/payPeriodObject'

export const useReportStore = defineStore('reportStore', {
  state: (): ReportStoreState => ({
    companyName: 'PhotoBomb',
    fixedCosts: [
      { id: 1, name: 'Rent', category: 'Overhead', amount: 1000, payPeriod: 'Monthly', total: 12000 },
      { id: 2, name: 'Parking', category: 'Overhead', amount: 80, payPeriod: 'Weekly', total: 4160}
    ],
    totalFixedCosts: 100,
    variableCosts: [
      { id: 1, name: 'New Camera', category: 'Equipment', total: 3200 },
      { id: 2, name: 'Ethernet Upgrade', category: 'Repair', total: 640}
    ],
  }),
  getters: {
    // totalFixedCosts({ fixedCosts }): number {
    //   const sum = fixedCosts
    //     .map((item) => item.amount)
    //     .reduce((a, b) => {
    //       return a + b
    //     })
    //     console.log("in reportStore", typeof sum)
    //   return sum
    // }
    // fixedCostItemTotal({ fixedCosts.x }): number {
    //   const period = fixedCosts.payPeriod
    //   const sum = fixedCosts
    // },
  },
  actions: {
    addFixedCostAction(fixedCost: FixedCosts) {
      this.fixedCosts.push(fixedCost)
    },
    addVariableCostAction(variableCost: VariableCosts) {
      this.variableCosts.push(variableCost)
    },
    // totalFixedCostItem(total: number) {
      
    // },
    addCompanyNameAction(companyName: string) {
      this.companyName = companyName
    }
  }
})
