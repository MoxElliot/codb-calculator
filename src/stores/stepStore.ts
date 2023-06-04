import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import steps from '@/assets/stepsArray'
import { onUpdated } from 'vue'


let current = window.location.pathname
onUpdated(()=>{
  console.log("does this work/")
  current = window.location.pathname
})
export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepCurrent: current,
    stepNext: '',
    stepPrevious: '',
    nextButtonLabel: "Let's Go!"
  }),
  actions: {
    // updateStepAction() {
    //   for (const results of Object.values(steps)) {
    //     if (results.current === window.location.pathname) {
    //       // this.stepCurrent = `${results.current}`
    //       this.stepNext = `${results.next}`
    //       this.stepPrevious = `${results.previous}`
    //     }
    //   }
    // },
    forwardStepAction() {
      for (const results of Object.values(steps)) {
        if (results.current === window.location.pathname) {
          console.log('in forwrd step results.current', results.current)
          // this.stepCurrent = `${results.next}`
          this.stepNext = `${results.next}`
          // this.stepPrevious = `${results.current}`
        }
      }
    },
    backStepAction() {
      for (const results of Object.values(steps)) {
        if (results.current === window.location.pathname) {
          // this.stepCurrent = `${results.current}`
          // this.stepNext = `${results.next}`
          this.stepPrevious = `${results.previous}`
        } 
      }
    },
    // nextButtonLabelAction() {
    //   console.log("in nextbuttonlabelAction")
    //   if (this.stepCurrent === '/') {
    //     return this.nextButtonLabel = "Let's Go!"
    //   } else {
    //     return this.nextButtonLabel = 'Next'
    //   }
      
    //}
  },
  getters: {
    setNextButtonLabel(): string {
      console.log("in setNextbuttonlabel")
      if (window.location.pathname === '/') {
        return (this.nextButtonLabel = "Let's Go!")
      } else {
        return (this.nextButtonLabel = 'Next')
      }
    }
  }
})
