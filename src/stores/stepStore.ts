import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import stepsArray from '@/assets/stepsArray'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepNum: 0,
    stepName: 'Home',
    stepPath:'/',
    stepProgress: 0
  }),
  actions: {
    forwardStepAction() {
      this.stepNum >= stepsArray.length - 1 ? this.stepNum : this.stepNum++
      this.stepPath = stepsArray[this.stepNum].path
      this.stepName = stepsArray[this.stepNum].name
    },
    backStepAction() {
      this.stepNum <= 0 ? this.stepNum : this.stepNum--
      this.stepPath = stepsArray[this.stepNum].path
      this.stepName = stepsArray[this.stepNum].name
    }
  },
  getters: {
    stepProgressPercent(): number {  //+(...).toFixed(2) is temporary to keep the percentage as a number with two digits. Will remove once this number is not displayed and used for CSS Progress bar
      return (this.stepProgress = +((this.stepNum / (stepsArray.length-1)) * 100).toFixed(2))
    }
  }
})
