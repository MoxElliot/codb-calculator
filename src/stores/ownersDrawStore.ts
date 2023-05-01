import { defineStore } from 'pinia'
import type OwnersDrawState from '../types/OwnersDrawState'

export const useOwnersDrawStore = defineStore('ownersDrawStore', {
  state: (): OwnersDrawState => ({
    payPerMonth: 0,
    savingsPerMonth: 0
  }),
  actions: {
    addPayPerMonthAction(payPerMonth: number) {
      this.payPerMonth = payPerMonth
    },
    addSavingsPerMonthAction(savingsPerMonth: number) {
      this.savingsPerMonth = savingsPerMonth
    }
  },
  // getters: {
  //   savingsYearly(state) {
  //     return state.savingsPerMonth * 12
  //   },
  //   payYearly(state) {
  //     return state.payPerMonth * 12
  //   }
  // }
})
