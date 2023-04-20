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
      //fixedCost here is arbitrary but setting it to the types within FixedCosts array
      this.fixedCosts.push(fixedCost) //fixedCosts here refer to the state item to which I want to push fixedCost into
    },
    addCompanyNameAction(companyName: string) {
      this.companyName = companyName // sets the states 'this.copanyName' with the companyName pulled in by the action
    }
  }
})

//to generate report once report array is built
// <div v-for="report in reportStore.reportArray">
// <p>{{ report.companyName }} </p>
