import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import stepsArray from '@/assets/stepsArray'

const getIndex = () => {
  let index = stepsArray.findIndex((step) => {
    return step.path === window.location.pathname
  })
  return index
}

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepNum: getIndex(),
    stepName: stepsArray[getIndex()].name,
    stepCurrent: window.location.pathname
  }),
  actions: {
    forwardStepAction() {
      getIndex()
      this.stepCurrent = stepsArray[this.stepNum].next
      this.stepName = stepsArray[this.stepNum + 1].name
      this.stepNum <= 7 ? (this.stepNum = this.stepNum + 1) : (this.stepNum = this.stepNum)
    },
    backStepAction() {
      getIndex()
      this.stepCurrent = stepsArray[this.stepNum].previous
      this.stepName = stepsArray[this.stepNum - 1].name
      this.stepNum >= 0 ? (this.stepNum = this.stepNum - 1) : (this.stepNum = this.stepNum)
    }
  }
})
