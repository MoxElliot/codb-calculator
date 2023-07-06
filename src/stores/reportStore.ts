import { defineStore, storeToRefs } from 'pinia'
import type CostObj from '../types/CostObj'
import type reportState from '@/types/reportState'
import payPeriodOptionsArray from '@/assets/payPeriodOptionsArray'
import formatMoney from '../assets/utility_functions/formatMoney'
import testingCostArr from '@/assets/testingCostArr'
import testingVariableCostArr from '@/assets/testingVariableCostArr'
import { useModalStore } from './modalStore'
import type CostItem from '@/types/CostItem'

export const useReportStore = defineStore('reportStore', {
  state: (): reportState => ({
    companyName: 'PhotoBomb',
    bookingsPerMonth: 3,
    priceAveragePerBooking: 1000.0,
    hoursAveragePerBooking: 200,
    variableCosts: testingVariableCostArr as CostObj[],
    fixedCosts: testingCostArr as CostObj[],
    totalCosts: 0,
    totalVariableCosts: 640,
    totalFixedCosts: 10000,
    payPerMonth: 200.0,
    savingsPerMonth: 200.0,
    userEmail: 'e@e.com',
    inputValid: true,
    blankSubmitError: '',
    fixedFormValid: true,
    variableFormValid: true,
    selectedCost: {
      id: '1',
      name: 'Test1',
      category: 'Other',
      amount: 1000,
      individualTotal: 1000,
      frequency: 'Monthly'
    } as CostItem,
    selectedId: '',
    selectedName: ''
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
    totalCostAction(costArr: CostObj[]) {
      let totalArr: number[] = []
      Object.entries(costArr).forEach(([key, val]) => {
        totalArr.push(Number(val.individualTotal || val.amount)) //Unsure why amount is a string, my data-input is typed to number
      })
      const totalNum: number = totalArr.reduce((a, b) => a + b, 0)
      this.totalCosts = formatMoney(totalNum)
    },
    addFixedCostAction(fixedCost: CostItem) {
      const payPeriodMultiplierElement = payPeriodOptionsArray.find(
        (ele) => ele.day === fixedCost.frequency
      )
      const payPeriodMultiplier: any = payPeriodMultiplierElement?.multiplier

      const totalNum: number = (fixedCost.amount as number) * payPeriodMultiplier
      fixedCost.individualTotal = formatMoney(totalNum)
      this.fixedCosts.unshift(fixedCost)
      this.totalCostAction(this.fixedCosts)
      this.totalFixedCosts = this.totalCosts
    },
    addVariableCostAction(variableCost: CostItem) {
      this.variableCosts.unshift(variableCost)
      this.totalCostAction(this.variableCosts)
      this.totalVariableCosts = this.totalCosts
    },
    handleAddCost(
      allValid: boolean,
      formValidAction: Function,
      resetForm: Function,
      addCostAction: Function,
      costItem: CostItem
    ) {
      if (allValid) {
        const modalStore = useModalStore()
        const { closeFormModal } = modalStore
        formValidAction(true)
        addCostAction(costItem)
        closeFormModal()
        resetForm()
      } else {
        formValidAction(false)
        this.setBlankSubmitErrorAction('Enter a value in each field')
      }
    },
    editFixedCostAction(id: string) {
      this.selectedCost = this.fixedCosts.find((item) => item.id === id) as CostItem
    },
    editVariableCostAction(id: string) {
      this.selectedCost = this.variableCosts.find((item) => item.id === id) as CostItem
    },
    addSelectedIdAction(selectedId: string) {
      this.selectedId = selectedId
    },
    addSelectedFixedCostNameAction() {
      const id = this.selectedId
      const selectedCost = this.fixedCosts.find((item) => item.id === id) as CostItem
      this.selectedName = selectedCost.name
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

        formValidAction(true)

        const newCost = { id, name, category, amount }
        const replaceIndex = this.variableCosts.indexOf(this.selectedCost)
        this.variableCosts.splice(replaceIndex, 1, newCost)

        closeFormModal()
        resetForm()
      } else {
        formValidAction(false)
        this.setBlankSubmitErrorAction('Enter a value in each field')
      }
    },
    deleteFixedCostAction() {
      const modalStore = useModalStore()
      const { closeOptionsMenu, closeConfirmModal } = modalStore
      
      try {
        this.selectedCost = this.fixedCosts.find((item) => item.id === this.selectedId) as CostItem
        const deleteIndex = this.fixedCosts.indexOf(this.selectedCost)
        this.fixedCosts.splice(deleteIndex, 1)
        this.totalCostAction(this.fixedCosts)
        this.totalFixedCosts = this.totalCosts
      } catch {
        console.error('error in deleteVariableCostAction')
      } finally {
        closeOptionsMenu()
        closeConfirmModal()
      }
    },
    deleteVariableCostAction(id: string) {
      try {
        this.selectedCost = this.variableCosts.find((item) => item.id === id) as CostItem
        const deleteIndex = this.variableCosts.indexOf(this.selectedCost)
        this.variableCosts.splice(deleteIndex, 1)
        this.totalCostAction(this.variableCosts)
        this.totalVariableCosts = this.totalCosts
      } catch {
        console.error('error in deleteVariableCostAction')
      }
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
