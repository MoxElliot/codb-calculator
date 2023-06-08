<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import { useRouter } from 'vue-router'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction } = reportStore
const stepStore = useStepStore()
const { stepCurrent } = storeToRefs(stepStore)

const router = useRouter()

const backStepFunction = () => {
  const backStep = router.currentRoute.value.meta.previous
  router.push(backStep)
}

const nextStepFunction = () => {
  const nextStep = router.currentRoute.value.meta.next
  
  if (!inputValid.value) {
    setBlankSubmitErrorAction('Please entered all required information')
  } else if (inputValid.value) {
    setBlankSubmitErrorAction('')
    router.push(nextStep)
  }
}

</script>
<template>
  <div
    class="flex h-full justify-center items-end sm:items-center"
    v-show="stepCurrent !== '/final-report-step'"
  >
    <div>
      <form-button
        label="Back"
        @click="backStepFunction()"
        class="btn-back"
        v-show="stepCurrent !== '/' || '/company-name-step'"
      />
      <form-button
        :label="stepCurrent === '/' ? 'Let\'s Go!' : 'Next'"
        @click="nextStepFunction()"
        class="btn-next mb-20 sm:mb-0 bg-nextButtonArrow bg-no-repeat bg-buttonArrow bg-15%"
        type="submit"
      />
    </div>
  </div>
</template>
