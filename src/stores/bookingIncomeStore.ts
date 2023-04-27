import { defineStore } from 'pinia'
import type BookingIncomeState from '../types/BookingIncomeState'

export const useBookingIncomeStore = defineStore('bookingIncomeStore', {
  state: (): BookingIncomeState => ({
    bookingsPerMonth: 0,
    priceAveragePerBooking: 0,
    hoursAveragePerBooking: 0
  }),
  actions: {
    addBookingsPerMonthAction(bookingsPerMonth: number) {
      this.bookingsPerMonth = bookingsPerMonth
      console.log(this.bookingsPerMonth)
    },
    addPricePerBookingAction(priceAveragePerBooking: number) {
      this.priceAveragePerBooking = priceAveragePerBooking
      console.log(this.priceAveragePerBooking)
    },
    addHoursPerBookingAction(hoursAveragePerBooking: number) {
      this.hoursAveragePerBooking = hoursAveragePerBooking
    }
  }
})
