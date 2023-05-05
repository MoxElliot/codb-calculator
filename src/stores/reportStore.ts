import { defineStore } from 'pinia'
import type FixedCostObj from '../types/FixedCostObj'
import type VariableCostObj from '../types/VariableCostObj'
import type reportState from '@/types/reportState'
import payPeriodOptionsArray from '@/assets/payPeriodOptionsArray'
import formatMoney from '../assets/utility_functions/formatMoney'

export const useReportStore = defineStore('reportStore', {
  state: (): reportState => ({
    companyName: '',
    bookingsPerMonth: 4,
    priceAveragePerBooking: 500.0,
    hoursAveragePerBooking: 10,
    variableCosts: [],
    totalVariableCosts: 500.0,
    fixedCosts: [],
    totalFixedCosts: 500.0,
    payPerMonth: 500.0,
    savingsPerMonth: 500.0,
    userEmail: ''
  }),
  actions: {
    averageYearly(num: number) {
      return num * 12
    },
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
  },

  getters: {
    costOfDoingBusiness(): number {
      return (
        this.totalVariableCosts * 12 +
        this.totalFixedCosts +
        this.savingsPerMonth * 12 +
        this.payPerMonth * 12
      )
    },
    bookingsToBreakEven(): number {
      // return this.priceAveragePerBooking === 0 //prevents divide by 0 error
      //   ? 'Cannot Determine without Average Price Per Booking'
      //   : this.monthlyCostOfDoingBusiness / this.priceAveragePerBooking
      return this.costOfDoingBusiness / 12 / this.priceAveragePerBooking
    },
    monthlyHoursWorked(): number {
      return this.hoursAveragePerBooking * this.bookingsPerMonth
    },
    averageMonthlyHourlyRate(): number {
      // return this.monthlyHoursWorked === 0 //prevents divide by 0 error
      //   ? 'Cannot Determine without Hours Worked Yearly'
      //   : this.payPerMonth / this.monthlyHoursWorked
      return this.payPerMonth / this.monthlyHoursWorked
    },
    averageMonthlyIncome(): number {
      // return this.monthlyHoursWorked === 0 //prevents divide by 0 error
      //   ? 'Cannot Determine without Hours Worked Yearly'
      //   : formatMoney(this.bookingsPerMonth * this.priceAveragePerBooking - (this.costOfDoingBusiness/12))
      return formatMoney(
        this.bookingsPerMonth * this.priceAveragePerBooking - this.costOfDoingBusiness / 12
      )
    }
  }
})
