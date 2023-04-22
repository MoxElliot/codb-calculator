import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import stepsArray from '@/assets/stepsArray'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepNum: 0,
    stepName: ''
  }),
  getters: {
    updateStep(state): any {
      console.log("in getter updateState, stepNum, stepName", state.stepNum, state.stepName)
      return state.stepName = stepsArray[state.stepNum].path
    }
  },
  actions: {
    forwardStepAction(stepNum: number) {
      // let stepChange = this.stepNum
      console.log('in StepStoreActions forward stepNum', this.stepNum)
      console.log('in StepStoreActions forward stepName', this.stepName)
      stepNum === this.stepNum++
      this.updateStep(this.stepNum)
      // stepChange = this.stepNum
      console.log('in StepStoreActions forward', this.stepNum)
      // this.stepName === stepsArray[stepChange].path
      console.log('in StepStoreActions forward stepName', this.stepName)
    },
    backStepAction(stepNum: number) {
      console.log('in StepStoreActions back', this.stepNum)
      console.log('in StepStoreActions forward stepName', this.stepName)
      stepNum === this.stepNum--
      this.updateStep(this.stepNum)
      // this.stepName === stepsArray[this.stepNum].path
      console.log('in StepStoreActions back', this.stepNum)
    }
  }
})


//when button is pushed, check what step we are on, pass what step to the store and either increment or decrement step