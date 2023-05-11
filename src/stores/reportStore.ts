import { defineStore } from 'pinia'
import type FixedCostObj from '../types/FixedCostObj'
import type VariableCostObj from '../types/VariableCostObj'
import type reportState from '@/types/reportState'
import payPeriodOptionsArray from '@/assets/payPeriodOptionsArray'
import formatMoney from '../assets/utility_functions/formatMoney'

export const useReportStore = defineStore('reportStore', {
  state: (): reportState => ({
    companyName: '',
    bookingsPerMonth: 0,
    priceAveragePerBooking: 0.00,
    hoursAveragePerBooking: 0,
    variableCosts: [] as VariableCostObj[],
    totalVariableCosts: 0.00,
    fixedCosts: [
      // { id: 1, name: 'Rent', category: 'Overhead', amount: 1000, payPeriod: 'monthly', individualTotal: 1000  },
      // { id: 2, name: 'Parking', category: 'Overhead', amount: 80, payPeriod: 'weekly', individualTotal: 320 }
    ] as FixedCostObj[],
    totalFixedCosts: 0.00,
    payPerMonth: 0.00,
    savingsPerMonth: 0.00,
    userEmail: '',
    inputValid: true,
  }),
  actions: {
    averageYearlyAction(num: number) {
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
      const totalNum: number = costArr.reduce((a, b) => a + b, 0)
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
      console.log("addUserEmailAction", userEmail)
      this.userEmail = userEmail
    },
    totalVariableCostAction() {
      let costArr: number[] = []
      Object.entries(this.variableCosts).forEach(([key, val]) => {
        costArr.push(Number(val.amount)) //Unsure why amount is a string, my data-input is typed to number
      })
      const totalNum: number = costArr.reduce((a, b) => a + b, 0)
      this.totalVariableCosts = formatMoney(totalNum)
    },
    addVariableCostAction(variableCost: VariableCostObj) {
      this.variableCosts.push(variableCost)
      this.totalVariableCostAction()
    },
    updateInputValidAction(inputValid: boolean) {
      this.inputValid = inputValid
      console.log("updateInputValidAction", inputValid, this.inputValid)
    }
  },

  getters: {
    costOfDoingBusiness(): number {
      return (
        this.totalVariableCosts +
        (this.totalFixedCosts * 12) +
        (this.savingsPerMonth * 12) +
        (this.payPerMonth * 12)
      )
    },
    bookingsToBreakEven(): number {
      return (Math.ceil(this.costOfDoingBusiness / this.priceAveragePerBooking))
    },
    monthlyHoursWorked(): number {
      return this.hoursAveragePerBooking * this.bookingsPerMonth
    },
    averageMonthlyHourlyRate(): number {
      return this.payPerMonth / this.monthlyHoursWorked
    },
    averageYearlyIncome(): number {
      return formatMoney(
        (this.bookingsPerMonth * this.priceAveragePerBooking * 12) - (this.costOfDoingBusiness)
      )
    }
  }
})