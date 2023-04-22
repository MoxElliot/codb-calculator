import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import stepsArray from '@/assets/stepsArray'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepNum: 0
  }),
  getters: {},
  actions: {
    forwardStepAction(stepNum: number) {
      console.log('in StepStoreActions forward', this.stepNum)
      stepNum === this.stepNum++
      console.log('in StepStoreActions forward', this.stepNum)
    },
    backStepAction(stepNum: number) {
      console.log('in StepStoreActions back', this.stepNum)
      stepNum === this.stepNum--
      console.log('in StepStoreActions back', this.stepNum)
    }
  }
})


//when button is pushed, check what step we are on, pass what step to the store and either increment or decrement step