import { defineStore } from 'pinia'
// import { useFixedCostStore } from '@/stores/fixedCostStore'
// import { useVariableCostStore } from '@/stores/variableCostStore'
// import { useBookingIncomeStore } from '@/stores/bookingIncomeStore'
// import { useOwnersDrawStore } from '@/stores/ownersDrawStore'
import type FixedCostObj from '../types/FixedCostObj'
import type VariableCostObj from '../types/VariableCostObj'
import type reportState from '@/types/reportState'
import payPeriodOptionsArray from '@/assets/payPeriodOptionsArray'
import formatMoney from '../assets/utility_functions/formatMoney'

export const useReportStore = defineStore('reportStore', {
  state: (): reportState => ({
    companyName: '',
    bookingsPerMonth: 0,
    priceAveragePerBooking: 0.0,
    hoursAveragePerBooking: 0,
    variableCosts: [],
    totalVariableCosts: 0.0,
    fixedCosts: [],
    totalFixedCosts: 0.0,
    payPerMonth: 0.0,
    savingsPerMonth: 0.0,
    userEmail: ''
  }),
  getters: {
    averageYearlyPay(): number {
      return this.payPerMonth * 12
    },
    averageYearlySavings(): number {
      // const ownersDrawStore = useOwnersDrawStore()
      return this.savingsPerMonth * 12
    },
    averageYearlyFixedCosts(): number {
      // const fixedCostStore = useFixedCostStore()
      return this.totalFixedCosts * 12
    },
    averageYearlyVariableCosts(): number {
      // const variableCostStore = useVariableCostStore()
      return this.totalVariableCosts * 12
    },
    costOfDoingBusiness(): number {
      return (
        this.averageYearlyFixedCosts +
        this.averageYearlyVariableCosts +
        this.averageYearlySavings +
        this.averageYearlyPay
      )
    },
    bookingsToBreakEven(): number | string {
      // const bookingIncomeStore = useBookingIncomeStore()
      return this.priceAveragePerBooking === 0 //prevents divide by 0 error
        ? 'Cannot Determine without Average Price Per Booking'
        : this.costOfDoingBusiness / this.priceAveragePerBooking
    },
    averageYearlyBookings(): number {
      // const bookingIncomeStore = useBookingIncomeStore()
      return this.bookingsPerMonth * 12
    },
    hoursWorkedYearly(): number {
      // const bookingIncomeStore = useBookingIncomeStore()
      return this.hoursAveragePerBooking * this.bookingsPerMonth * 12
    },
    averageHourlyRate(): any {
      return this.hoursWorkedYearly === 0 //prevents divide by 0 error
        ? 'Cannot Determine without Hours Worked Yearly'
        : this.averageYearlyPay / this.hoursWorkedYearly
    },
    averageYearlyIncome(): number | string {
      // const bookingIncomeStore = useBookingIncomeStore()
      return this.hoursWorkedYearly === 0 //prevents divide by 0 error
        ? 'Cannot Determine without Hours Worked Yearly'
        : this.averageYearlyBookings * this.priceAveragePerBooking -
            this.costOfDoingBusiness
    }
  },
  actions: {
    addCompanyNameAction(companyName: string) {
      this.companyName = companyName
    },
    totalFixedCostAction() {
      let costArr: number[] = []
      Object.entries(this.fixedCosts).forEach(([key, val]) => {
        costArr.push(Number(val.individualTotal)) //Unsure why amount is a string, my data-input is typed to number
      })
      const totalNum: number = costArr.reduce((a, b) => a + b)
      this.totalFixedCosts = formatMoney(totalNum)
    },
    addFixedCostAction(fixedCost: FixedCostObj) {
      const payPeriodMultiplierElement = payPeriodOptionsArray.find(
        (ele) => ele.day === fixedCost.payPeriod
      )
      const payPeriodMultiplier: any = payPeriodMultiplierElement?.multiplier

      const totalNum: number = (fixedCost.amount as number) * payPeriodMultiplier
      fixedCost.individualTotal = formatMoney(totalNum)
      this.fixedCosts.push(fixedCost)
      this.totalFixedCostAction()
    }, 
    addBookingsPerMonthAction(bookingsPerMonth: number) {
      this.bookingsPerMonth = bookingsPerMonth
    },
    addPricePerBookingAction(priceAveragePerBooking: number) {
      this.priceAveragePerBooking = priceAveragePerBooking
    },
    addHoursPerBookingAction(hoursAveragePerBooking: number) {
      this.hoursAveragePerBooking = hoursAveragePerBooking
    },
    addPayPerMonthAction(payPerMonth: number) {
      this.payPerMonth = payPerMonth
    },
    addSavingsPerMonthAction(savingsPerMonth: number) {
      this.savingsPerMonth = savingsPerMonth
    }, 
    addUserEmailAction(userEmail: string) {
      this.userEmail = userEmail
    },
    totalVariableCostAction() {
      let costArr: number[] = []
      Object.entries(this.variableCosts).forEach(([key, val]) => {
        costArr.push(Number(val.amount)) //Unsure why amount is a string, my data-input is typed to number
      })
      const totalNum: number = costArr.reduce((a, b) => a + b)
      this.totalVariableCosts = formatMoney(totalNum)
    },
    addVariableCostAction(variableCost: VariableCostObj) {
      this.variableCosts.push(variableCost)
      this.totalVariableCostAction()
    }
  }
})
