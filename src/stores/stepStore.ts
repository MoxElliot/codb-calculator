import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import stepsArray from '@/assets/stepsArray'

const index = () =>
  stepsArray.findIndex((step) => {
    return step.path === window.location.pathname
  })

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepNum: index(),
    stepName: stepsArray[index()].name,
    stepCurrent: window.location.pathname,
  }),
  actions: {
    forwardStepAction() {
      const index = stepsArray.findIndex((path) => path.path === this.stepCurrent)
      this.stepCurrent = stepsArray[index].next
      this.stepName = stepsArray[index + 1].name
      this.stepNum <= 7 ? index + 1 : index
    },
    backStepAction() {
      const index = stepsArray.findIndex((path) => path.path === this.stepCurrent)
      this.stepCurrent = stepsArray[index].previous
      this.stepName = stepsArray[index - 1].name
      this.stepNum >= 0 ? index - 1 : index
    }
  }
})