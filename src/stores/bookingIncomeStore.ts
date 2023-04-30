import { defineStore } from 'pinia'
import type BookingIncomeState from '../types/BookingIncomeState'

export const useBookingIncomeStore = defineStore('bookingIncomeStore', {
  state: (): BookingIncomeState => {
    return {
      bookingsPerMonth: 0,
      priceAveragePerBooking: 0,
      hoursAveragePerBooking: 0
    }
  },
  actions: {
    addBookingsPerMonthAction(bookingsPerMonth: number) {
      this.bookingsPerMonth = bookingsPerMonth
    },
    addPricePerBookingAction(priceAveragePerBooking: number) {
      this.priceAveragePerBooking = priceAveragePerBooking
    },
    addHoursPerBookingAction(hoursAveragePerBooking: number) {
      this.hoursAveragePerBooking = hoursAveragePerBooking
    }
  }
})
