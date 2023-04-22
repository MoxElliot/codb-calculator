import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import stepsArray from '@/assets/stepsArray'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepNum: 0,
    stepName: ''
  }),
  // getters: {
  //   updateStep(state):any{
  //     state.stepName = stepsArray[state.stepNum].path
  //     console.log("in getter updateState, stepNum, stepName", state.stepNum, state.stepName)
  //     return  state.stepName
  //   }
  // },
  actions: {
    forwardStepAction() {
      this.stepNum >= stepsArray.length-1 ? this.stepNum : this.stepNum++ 
      this.stepName = stepsArray[this.stepNum].path
    },
    backStepAction() {
      this.stepNum <= 0 ? this.stepNum : this.stepNum-- 
      this.stepName = stepsArray[this.stepNum].path
    }
  }
})


//when button is pushed, check what step we are on, pass what step to the store and either increment or decrement step