import { defineStore } from 'pinia'
import type FixedCostObj from '../types/FixedCostObj'
import type VariableCostObj from '../types/VariableCostObj'
import type reportState from '@/types/reportState'
import payPeriodOptionsArray from '@/assets/payPeriodOptionsArray'
import formatMoney from '../assets/utility_functions/formatMoney'
import testingCostArr from '@/assets/testingCostArr'
import { useModalStore } from './modalStore'
import type CostItem from '@/types/CostItem'

export const useReportStore = defineStore('reportStore', {
  state: (): reportState => ({
    companyName: 'PhotoBomb',
    bookingsPerMonth: 3,
    priceAveragePerBooking: 1000.0,
    hoursAveragePerBooking: 200,
    variableCosts: [
      { id: '0', name: 'Parking0', category: 'Overhead', amount: 80 },
      { id: '1', name: 'Parking1', category: 'Overhead', amount: 80 },
      { id: '2', name: 'Parking2', category: 'Overhead', amount: 80 },
      { id: '3', name: 'Parking3', category: 'Overhead', amount: 80 },
      { id: '4', name: 'Parking4', category: 'Overhead', amount: 80 },
      { id: '5', name: 'Parking5', category: 'Overhead', amount: 80 },
      { id: '6', name: 'Parking6', category: 'Overhead', amount: 80 },
      { id: '7', name: 'Parking7', category: 'Overhead', amount: 80 }
    ] as VariableCostObj[],
    totalVariableCosts: 80.0,
    fixedCosts: testingCostArr as FixedCostObj[],
    totalFixedCosts: 1200.0,
    payPerMonth: 200.0,
    savingsPerMonth: 200.0,
    userEmail: 'e@e.com',
    inputValid: true,
    blankSubmitError: '',
    fixedFormValid: true,
    variableFormValid: true,
    selectedCost: 
      {
        id: '1',
        name: 'Test1',
        category: 'Overhead',
        amount: 1000,
        frequency: 'Monthly',
        individualTotal: 1000
      } as CostItem,
    editVariableCost: [
      { id: '7', name: 'Parking', category: 'Overhead', amount: 80 }
    ] as VariableCostObj[],
    selectedId: ''
    // companyName: '',
    // bookingsPerMonth: 0,
    // priceAveragePerBooking: 0,
    // hoursAveragePerBooking: 0,
    // variableCosts: [] as VariableCostObj[],
    // totalVariableCosts: 0.0,
    // fixedCosts: [] as FixedCostObj[],
    // totalFixedCosts: 0.0,
    // payPerMonth: 0.0,
    // savingsPerMonth: 0.0,
    // userEmail: '',
    // inputValid: false,
    // blankSubmitError: '',
    // fixedFormValid: true,
    // variableFormValid: true
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
        (ele) => ele.day === fixedCost.frequency
      )
      const payPeriodMultiplier: any = payPeriodMultiplierElement?.multiplier

      const totalNum: number = (fixedCost.amount as number) * payPeriodMultiplier
      fixedCost.individualTotal = formatMoney(totalNum)
      this.fixedCosts.unshift(fixedCost)

      this.totalFixedCostAction()
    },
    editFixedCostAction(
      id: string,
    ) {
      this.selectedCost = this.fixedCosts.find(item => item.id === id) as CostItem
    },

    editVariableCostAction(id: string, name: string, category: string, amount: number | null) {
      this.editVariableCost[0] = { id, name, category, amount }
    },
    addSelectedIdAction(selectedId: string) {
      this.selectedId = selectedId
    },
    replaceFixedCostAction(
      id: string,
      name: string,
      category: string,
      amount: number | null,
      allValid: boolean,
      formValidAction: Function,
      resetForm: Function,
      frequency: string,
      individualTotal: number
    ) {
      if (allValid) {
        const modalStore = useModalStore()
        const { closeFormModal } = modalStore

        formValidAction(true) //toggles form to true to prevent error messages

        const payPeriodMultiplierElement = payPeriodOptionsArray.find(
          (ele) => ele.day === frequency
        )
        const payPeriodMultiplier: any = payPeriodMultiplierElement?.multiplier

        const totalNum: number = (amount as number) * payPeriodMultiplier

        individualTotal = formatMoney(totalNum)

        const newCost = { id, name, category, amount, frequency, individualTotal }
        const replaceIndex = this.fixedCosts.indexOf(this.selectedCost)
        this.fixedCosts.splice(replaceIndex, 1, newCost)
        closeFormModal()
        resetForm()
      } else {
        formValidAction(false)
        this.setBlankSubmitErrorAction('Enter a value in each field')
      }
    },
    replaceVariableCostAction(
      id: string,
      name: string,
      category: string,
      amount: number | null,
      allValid: boolean,
      formValidAction: Function,
      resetForm: Function
    ) {
      if (allValid) {
        const modalStore = useModalStore()
        const { closeFormModal } = modalStore
        const newCost = { id, name, category, amount }

        console.log('inReplace', this.fixedCosts[Number(id)], newCost, Number(id))
        this.variableCosts[Number(this.selectedId)] = newCost
        closeFormModal()
        resetForm()
      } else {
        formValidAction(false)
        this.setBlankSubmitErrorAction('Enter a value in each field')
      }
    },
    deleteFixedCostAction(id: string){
      this.selectedCost = this.fixedCosts.find(item => item.id === id) as CostItem
      const deleteIndex = this.fixedCosts.indexOf(this.selectedCost)
      this.fixedCosts.splice(deleteIndex, 1)
      console.log("in deltefixedCostAction", this.fixedCosts)
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
      this.variableCosts.unshift(variableCost)
      this.totalVariableCostAction()
    },
    updateInputValidAction(inputValid: boolean) {
      this.inputValid = inputValid
    },
    setBlankSubmitErrorAction(blankSubmitError: string) {
      this.blankSubmitError = blankSubmitError
    },
    setFixedFormValidAction(formValid: boolean) {
      this.fixedFormValid = formValid
    },
    setVariableFormValidAction(formValid: boolean) {
      this.variableFormValid = formValid
    },
    handleAddCost(
      costName: string,
      costCategory: string,
      costAmount: number | null,
      allValid: boolean,
      formValidAction: Function,
      resetForm: Function,
      addCostAction: Function,
      costArr: any[],
      costFrequency?: string,
      costTotal?: number
    ) {
      if (allValid) {
        const modalStore = useModalStore()
        const { closeFormModal } = modalStore

        formValidAction(true)
        addCostAction({
          id: (costArr.length + 1).toString(),
          name: costName,
          category: costCategory,
          amount: costAmount,
          frequency: costFrequency,
          individualTotal: costTotal
        })
        closeFormModal()
        resetForm()
      } else {
        formValidAction(false)
        this.setBlankSubmitErrorAction('Enter a value in each field')
      }
    }
  },

  getters: {
    costOfDoingBusiness(): number {
      return (
        this.totalVariableCosts +
        this.totalFixedCosts * 12 +
        this.savingsPerMonth * 12 +
        this.payPerMonth * 12
      )
    },
    bookingsToBreakEven(): number {
      if (typeof this.priceAveragePerBooking === 'number') {
        return Math.ceil(this.costOfDoingBusiness / this.priceAveragePerBooking)
      } else {
        return 0
      }
    },
    monthlyHoursWorked(): number {
      if (
        typeof this.bookingsPerMonth === 'number' &&
        typeof this.hoursAveragePerBooking === 'number'
      ) {
        return this.hoursAveragePerBooking * this.bookingsPerMonth
      } else {
        return 0
      }
    },
    averageMonthlyHourlyRate(): number {
      return this.payPerMonth / this.monthlyHoursWorked
    },
    averageYearlyIncome(): number {
      if (
        typeof this.bookingsPerMonth === 'number' &&
        typeof this.priceAveragePerBooking === 'number'
      ) {
        return formatMoney(
          this.bookingsPerMonth * this.priceAveragePerBooking * 12 - this.costOfDoingBusiness
        )
      } else {
        return 0
      }
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
      if (typeof this.bookingsPerMonth === 'number') {
        return this.bookingsPerMonth * 12
      } else {
        return 0
      }
    },
    hoursWorkedYearly(): number {
      return this.monthlyHoursWorked * 12
    },
    hourlyRateYearly(): number {
      return this.averageMonthlyHourlyRate * 12
    }
  }
})
