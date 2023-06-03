import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import steps from '@/assets/stepsArray'
// import getIndex from '@/assets/utility_functions/getIndex'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    // stepNum: getIndex(),
    // stepName: stepsArray[getIndex()].name,
    // stepCurrent: window.location.pathname
    stepCurrent: window.location.pathname,
    stepNext: 'Next',
    stepPrevious: 'Previous',
  }),
  actions: {
    forwardStepAction() {
      console.log("forwardStepAction, steps", steps.Home.current)
      console.log("forwardStepAction, stepCurrent", this.stepCurrent)
      console.log("forwardStepAction, object keys", Object.keys(steps)[0])
      for(let prop in steps) {
        for( let current in steps[prop])
      }

      })

      // getIndex()
      // this.stepCurrent = stepsArray[this.stepNum].next
      // this.stepName = stepsArray[this.stepNum + 1].name
      // this.stepNum <= 7 ? (this.stepNum = this.stepNum + 1) : (this.stepNum = this.stepNum)
    },
    backStepAction() {
      // getIndex()
      // this.stepCurrent = stepsArray[this.stepNum].previous
      // this.stepName = stepsArray[this.stepNum - 1].name
      // this.stepNum >= 0 ? (this.stepNum = this.stepNum - 1) : (this.stepNum = this.stepNum)
    }
  }
})
