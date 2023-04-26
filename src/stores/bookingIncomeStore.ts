import { defineStore } from 'pinia'
import type BookingIncomeState from '../types/BookingIncomeState'

export const useReportStore = defineStore('reportStore', {
  state: (): BookingIncomeState => ({
    bookingsPerMonth: 0,
    averagePricePerBooking: 0,
    averageHoursPerBooking: 0,
  }),
  actions: {
    addFixedCostAction(fixedCost: FixedCosts) {
      this.fixedCosts.push(fixedCost)
    },
  }
})
