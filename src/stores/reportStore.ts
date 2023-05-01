import { defineStore } from 'pinia'
import { useFixedCostStore } from '@/stores/fixedCostStore'
import { useVariableCostStore } from '@/stores/variableCostStore'
import { useBookingIncomeStore } from '@/stores/bookingIncomeStore'
import { useOwnersDrawStore } from '@/stores/ownersDrawStore'

export const useReportStore = defineStore('reportStore', {
  state: () => ({}),
  getters: {
    averageYearlyPay(): number {
      const ownersDrawStore = useOwnersDrawStore()
      return ownersDrawStore.payPerMonth * 12
    },
    avereageYearlySavings(): number {
      const ownersDrawStore = useOwnersDrawStore()
      return ownersDrawStore.savingsPerMonth * 12
    },
    averageYearlyFixedCosts(): number {
      const fixedCostStore = useFixedCostStore()
      return fixedCostStore.totalFixedCosts * 12
    },
    averageYearlyVariableCosts(): number {
      const variableCostStore = useVariableCostStore()
      return variableCostStore.totalVariableCosts * 12
    },
    costOfDoingBusiness(): number {
      return (
        this.averageYearlyFixedCosts +
        this.averageYearlyVariableCosts +
        this.avereageYearlySavings +
        this.averageYearlyPay
      )
    },
    bookingsToBreakEven(): number | string {
      const bookingIncomeStore = useBookingIncomeStore()
      return bookingIncomeStore.priceAveragePerBooking === 0 //prevents divide by 0 error
        ? 'Cannot Determine without Average Price Per Booking'
        : this.costOfDoingBusiness / bookingIncomeStore.priceAveragePerBooking
    },
    averageYearlyBookings(): number {
      const bookingIncomeStore = useBookingIncomeStore()
      return bookingIncomeStore.bookingsPerMonth * 12
    },
    hoursWorkedYearly(): number {
      const bookingIncomeStore = useBookingIncomeStore()
      return bookingIncomeStore.hoursAveragePerBooking * bookingIncomeStore.bookingsPerMonth * 12
    },
    averageHourlyRate(): any {
      return this.hoursWorkedYearly === 0 //prevents divide by 0 error
        ? 'Cannot Determine without Hours Worked Yearly'
        : this.averageYearlyPay / this.hoursWorkedYearly
    },
    averageYearlyIncome(): number | string {
      const bookingIncomeStore = useBookingIncomeStore()
      return this.hoursWorkedYearly === 0 //prevents divide by 0 error
        ? 'Cannot Determine without Hours Worked Yearly'
        : (this.averageYearlyBookings * bookingIncomeStore.priceAveragePerBooking) - this.costOfDoingBusiness
    }
  },
  actions: {}
})
