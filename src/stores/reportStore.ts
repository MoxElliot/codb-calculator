import { defineStore } from 'pinia'
import type FixedCostObj from '../types/FixedCostObj'
import type VariableCostObj from '../types/VariableCostObj'
import type reportState from '@/types/reportState'
import payPeriodOptionsArray from '@/assets/payPeriodOptionsArray'
import formatMoney from '../assets/utility_functions/formatMoney'

export const useReportStore = defineStore('reportStore', {
  state: (): reportState => ({
    // companyName: 'PhotoBomb',
    // bookingsPerMonth: 3,
    // priceAveragePerBooking: 1000.00,
    // hoursAveragePerBooking: 200,
    // variableCosts: [{ id: 2, name: 'Parking', category: 'Overhead', amount: 80 }] as VariableCostObj[],
    // totalVariableCosts: 80.00,
    // fixedCosts: [
    //   { id: 1, name: 'Rent', category: 'Overhead', amount: 1000, payPeriod: 'monthly', individualTotal: 1000  }
    // ] as FixedCostObj[],
    // totalFixedCosts: 1200.00,
    // payPerMonth: 200.00,
    // savingsPerMonth: 200.00,
    // userEmail: 'e@e.com',
    // inputValid: true,
    companyName: '',
    bookingsPerMonth: 0,
    priceAveragePerBooking: 0.00,
    hoursAveragePerBooking: 0,
    variableCosts: [] as VariableCostObj[],
    totalVariableCosts: 0.00,
    fixedCosts: [
    ] as FixedCostObj[],
    totalFixedCosts: 0.00,
    payPerMonth: 0.00,
    savingsPerMonth: 0.00,
    userEmail: '',
    inputValid: true,
    blankSubmitError: '',
  }),
  actions: {
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
      
      console.log("inAddFixedCostAction", this.fixedCosts)
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
      const totalNum: number = costArr.reduce((a, b) => a + b, 0)
      this.totalVariableCosts = formatMoney(totalNum)
    },
    addVariableCostAction(variableCost: VariableCostObj) {
      this.variableCosts.push(variableCost)
      this.totalVariableCostAction()
    },
    updateInputValidAction(inputValid: boolean) {
      this.inputValid = inputValid
      console.log("updateInputValidAction", this.inputValid)  ///this.$route
    },
    setBlankSubmitErrorAction(blankSubmitError: string) {
      this.blankSubmitError = blankSubmitError
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
    },
    getCompanyName(): string {
      return this.companyName
    }, 
    fixedCostYearly(): number {
      return this.totalFixedCosts * 12
    },
    variableCostYearly(): number {
      return this.totalVariableCosts * 12
    },
    payYearly(): number {
      return this.payPerMonth * 12
    },
    savingsYearly(): number {
      return this.savingsPerMonth * 12
    },
    bookingsYearly(): number {
      return this.bookingsPerMonth * 12
    },
    hoursWorkedYearly(): number {
      return this.monthlyHoursWorked * 12
    },
    hourlyRateYearly(): number {
      return this.averageMonthlyHourlyRate * 12
    },
  }
})