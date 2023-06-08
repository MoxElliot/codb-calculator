import { defineStore } from 'pinia'
import type StepStoreState from '../types/StepStoreState'
import steps from '@/assets/stepsObject'
import router from '../router/index'
import { useRouter, useRoute } from 'vue-router'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepCurrent: router.currentRoute.value.path,
    stepNext: router.currentRoute.value.meta.next,
    stepPrevious: router.currentRoute.value.meta.previous,
  }),
  actions: {
    forwardStepAction() {
      // for (const results of Object.values(steps)) {
      //   if (results.current === window.location.pathname) {
      //     console.log('in forwrd step results.current', results.current)
      //     // this.stepCurrent = `${results.next}`
      //     this.stepNext = `${results.next}`
      //     // this.stepPrevious = `${results.current}`
      //   }
      // }
      // console.log("useRouter", router.currentRoute.value['name'])
      console.log("useRoute", useRoute())
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
  }
})
