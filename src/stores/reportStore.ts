import { defineStore } from 'pinia'
import type FixedCosts from '../types/FixedCosts'
import type VariableCosts from '../types/VariableCosts'
import type ReportStoreState from '../types/ReportStoreState'
import payPeriodObject from '../assets/payPeriodObject'

export const useReportStore = defineStore('reportStore', {
  state: (): ReportStoreState => ({
    companyName: 'PhotoBomb',
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
    variableCosts: [
      { id: 1, name: 'New Camera', category: 'Equipment', total: 3200 },
      { id: 2, name: 'Ethernet Upgrade', category: 'Repair', total: 640 }
    ]
  }),
  actions: {
    addFixedCostAction(fixedCost: FixedCosts) {
      this.fixedCosts.push(fixedCost)
    },
    addVariableCostAction(variableCost: VariableCosts) {
      this.variableCosts.push(variableCost)
    },
    addCompanyNameAction(companyName: string) {
      this.companyName = companyName
    }
  }
})
