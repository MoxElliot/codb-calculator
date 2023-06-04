import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import steps from '@/assets/stepsArray'
// import getIndex from '@/assets/utility_functions/getIndex'

const result = [...[steps]]

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    // stepNum: getIndex(),
    // stepName: stepsArray[getIndex()].name,
    // stepCurrent: window.location.pathname
    stepCurrent: window.location.pathname,
    stepNext: '',
    stepPrevious: '',
  }),
  actions: {
    forwardStepAction() {
        for( const results of Object.values(steps)) {
          console.log("in for", `${results.current}`)

          if( results.current === window.location.pathname) {
          console.log("in IF ", `${results.current}`)
          this.stepCurrent = `${results.current}`
          this.stepNext = `${results.next}`
          this.stepPrevious = `${results.previous}`
          console.log("in If current, next, previous", this.stepCurrent, this.stepNext, this.stepPrevious)
        }
      }

   
    

      // getIndex()
      // this.stepCurrent = stepsArray[this.stepNum].next
      // this.stepName = stepsArray[this.stepNum + 1].name
      // this.stepNum <= 7 ? (this.stepNum = this.stepNum + 1) : (this.stepNum = this.stepNum)
    },
    backStepAction() {
      for( const results of Object.values(steps)) {
        console.log("in for", `${results.current}`)

        if( results.current === window.location.pathname) {
        console.log("in IF ", `${results.current}`)
        this.stepCurrent = `${results.current}`
        this.stepNext = `${results.next}`
        this.stepPrevious = `${results.previous}`
        console.log("in If current, next, previous", this.stepCurrent, this.stepNext, this.stepPrevious)
      }
    }
      // getIndex()
      // this.stepCurrent = stepsArray[this.stepNum].previous
      // this.stepName = stepsArray[this.stepNum - 1].name
      // this.stepNum >= 0 ? (this.stepNum = this.stepNum - 1) : (this.stepNum = this.stepNum)
    }
  }
})
