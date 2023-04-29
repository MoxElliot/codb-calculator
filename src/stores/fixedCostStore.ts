import { defineStore } from 'pinia'
import type FixedCostObj from '../types/FixedCostObj'
import type FixedCostState from '../types/FixedCostState'
import payPeriodOptionsArray from '@/assets/payPeriodOptionsArray'

export const useFixedCostStore = defineStore('fixedCostStore', {
  state: (): FixedCostState => ({
    fixedCosts: [],
    totalFixedCosts: 0
  }),
  actions: {
    totalFixedCostAction() {
      let costArr: number[] = []
      Object.entries(this.fixedCosts).forEach(([key, val]) => {
        costArr.push(Number(val.individualTotal)) //Unsure why amount is a string, my data-input is typed to number
      })
      this.totalFixedCosts = costArr.reduce((a,b) => a + b)
    },
    addFixedCostAction(fixedCost: FixedCostObj) {
      // const period = fixedCost.payPeriod
      // let periodMultiplier = 0
      console.log("in store, fixedCostAction payPeridObj", payPeriodOptionsArray)
      // console.log("in store, fixedCostAction payPeridObj.weekly", payPeriodOptionsArray[0])
      // const periodMultiplierFinder = () => {
       
      //   for(let i = 0; i++; i < 4) {
      //     payPeriodOptionsArray[i][0] === fixedCost.payPeriod
      //     console.log("in")
      //     ? periodMultiplier = payPeriodOptionsArray[i][1] 
      //     : "error"
      //   }
      //   return periodMultiplier
      // }
      // console.log("in store, periodMultiplier", periodMultiplier)
      // console.log("in store, fixedCostAction fixedCost", fixedCost)
      // console.log("in store, fixedCostAction fixedCost.payPeriod",fixedCost.payPeriod)
      // console.log("in store, does it equal", payPeriodOptionsArray[0][0] === fixedCost.payPeriod)
      const payPeriodMultiplierElement = payPeriodOptionsArray.find(ele => ele.day === fixedCost.payPeriod)
      const payPeriodMultiplier: any = payPeriodMultiplierElement?.multiplier
      console.log( "in store, periodMultiplier", payPeriodMultiplier)

      fixedCost.individualTotal = fixedCost.amount * payPeriodMultiplier
      this.fixedCosts.push(fixedCost)
      this.totalFixedCostAction()
    },
  }
})
