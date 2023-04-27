import { defineStore } from 'pinia'
import type ReportStoreState from '../types/ReportStoreState'

export const useReportStore = defineStore('reportStore', {
  state: (): ReportStoreState => ({
    companyName: 'PhotoBomb',
  }),
  actions: {
    addCompanyNameAction(companyName: string) {
      this.companyName = companyName
    }
  }
})
