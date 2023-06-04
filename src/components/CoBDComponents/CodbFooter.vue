<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import { onMounted, onUpdated } from 'vue'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction } = reportStore
const stepStore = useStepStore()
const { stepCurrent, stepNext, stepPrevious, nextButtonLabel } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction, setNextButtonLabel, updateStepAction } = stepStore

const checkValid = () => {
  if (!inputValid.value) {
    setBlankSubmitErrorAction('Please fill out the form')
  } else if (inputValid.value) {
    setBlankSubmitErrorAction('')
    forwardStepAction()
  }
}
onUpdated(()=>{
  console.log("UPDATED in CodbFooter steps", "current", stepCurrent.value, "next", stepNext.value, "previous", stepPrevious.value)
  updateStepAction
})
onMounted(()=>{
  console.log("MOUNTED in CodbFooter steps", "current", stepCurrent.value, "next", stepNext.value, "previous", stepPrevious.value)
  updateStepAction
})
</script>
<template>
  <div class="flex" v-show="stepCurrent !== '/final-report-step'">
    <router-link :to="stepPrevious">
      <form-button
        label="Back"
        @click="backStepAction()"
        class="btn-back"
        v-show="stepCurrent !== '/' || '/company-name-step'"
      />
    </router-link>
    <router-link :to="stepCurrent">
      <form-button
        :label="stepCurrent === '/' ? 'Let\'s Go!' : 'Next'"
        @click="forwardStepAction()"
        class="btn-next text-center"
        type="submit"
      />
    </router-link>
  </div>
</template>
