import { defineStore } from 'pinia'
import type CompanyStoreState from '../types/CompanyStoreState'

export const useCompanyStore = defineStore('companyStore', {
  state: (): CompanyStoreState => ({
    companyName: '',
  }),
  actions: {
    addCompanyNameAction(companyName: string) {
      this.companyName = companyName
    }
  }
})
