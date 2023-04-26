import { defineStore } from 'pinia'
import type BookingIncomeState from '../types/BookingIncomeState'

export const useBookingIncomeStore = defineStore('bookingIncomeStore', {
  state: (): BookingIncomeState => ({
    bookingsPerMonth: 0,
    averagePricePerBooking: 0,
    averageHoursPerBooking: 0,
  }),
  actions: {
    // addFixedCostAction(fixedCost: FixedCosts) {
    //   this.fixedCosts.push(fixedCost)
    // },
    updateBookingsPerMonth(bookingsPerMonth: number) {
      this.bookingsPerMonth = bookingsPerMonth
      console.log(this.bookingsPerMonth)
    }
  }
})