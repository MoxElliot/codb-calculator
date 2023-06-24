import { defineStore } from 'pinia'
import { useReportStore } from '@/stores/reportStore'
import type StepStoreState from '../types/StepStoreState'
import router from '../router/index'
import { storeToRefs } from 'pinia'

export const useStepStore = defineStore('stepStore', {
  state: (): StepStoreState => ({
    stepCurrent: router.currentRoute.value.path,
  }),
  actions: {
    backStepAction() {
      const reportStore = useReportStore()
      const backStep = router.currentRoute.value.meta.previous

      reportStore.updateInputValidAction(true)
      router.push(backStep)
      this.stepCurrent = backStep
    },
    nextStepAction() {
      const reportStore = useReportStore()
      const { inputValid } = storeToRefs(reportStore)
      const nextStep = router.currentRoute.value.meta.next
  
      if (!inputValid.value) {
        reportStore.setBlankSubmitErrorAction('Please Enter Required Information')
      } else if (inputValid.value) {
        reportStore.setBlankSubmitErrorAction('')
        router.push(nextStep)
        this.stepCurrent = nextStep
      }
    }
  }
})
