import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    step: 0
  }),
  getters: {},
  actions: {
    forwardStepAction(step: number) {
      console.log('in StepStoreActions forward', this.step)
      step === this.step++
      console.log('in StepStoreActions forward', this.step)
    },
    backStepAction(step: number) {
      console.log('in StepStoreActions back', this.step)
      step === this.step--
      console.log('in StepStoreActions back', this.step)
    }
  }
})
