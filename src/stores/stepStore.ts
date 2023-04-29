import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import stepsArray from '@/assets/stepsArray'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepNum: 0,
    stepName: ''
  }),
  actions: {
    forwardStepAction() {
      this.stepNum >= stepsArray.length - 1 ? this.stepNum : this.stepNum++
      this.stepName = stepsArray[this.stepNum].path
      console.log("in forwardStepAction stepName", this.stepName)
    },
    backStepAction() {
      this.stepNum <= 0 ? this.stepNum : this.stepNum--
      this.stepName = stepsArray[this.stepNum].path
      console.log("in backStepAction stepName", this.stepName)
    }
  }
})
