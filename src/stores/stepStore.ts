import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    step: 0,
  }),
  getters: {
   
  },
  actions: {
    forwardStepAction(step: StepStoreState) {

    },
    backStepAction(step: StepStoreState) {

    },
  }
})