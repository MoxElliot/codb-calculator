import { defineStore } from 'pinia'
import type OwnersDrawState from '../types/OwnersDrawState'

export const useOwnersDrawStore = defineStore('ownersDrawStore', {
  state: (): OwnersDrawState => ({
    incomePerMonth: 0,
    savingsPerMonth: 0
  }),
  actions: {
    addIncomePerMonthAction(incomePerMonth: number) {
      this.incomePerMonth = incomePerMonth
    },
    addSavingsPerMonthAction(savingsPerMonth: number) {
      this.savingsPerMonth = savingsPerMonth
    }
  }
})
