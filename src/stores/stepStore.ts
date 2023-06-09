import { defineStore } from 'pinia'
import { useReportStore } from '@/stores/reportStore'
import type StepStoreState from '../types/StepStoreState'
import steps from '@/assets/stepsObject'
import router from '../router/index'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepCurrent: router.currentRoute.value.path,
    stepNext: router.currentRoute.value.meta.next,
    stepPrevious: router.currentRoute.value.meta.previous
  }),
  actions: {
    nextStepAction() {
      const reportStore = useReportStore()
      const { inputValid } = storeToRefs(reportStore)
      const nextStep = router.currentRoute.value.meta.next

      if (!inputValid.value) {
        reportStore.setBlankSubmitErrorAction('Please entered all required information')
      } else if (inputValid.value) {
        reportStore.setBlankSubmitErrorAction('')
        router.push(nextStep)
      }
    },
    backStepAction() {
      const backStep = router.currentRoute.value.meta.previous
      router.push(backStep)
    }
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
