<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction } = reportStore
const stepStore = useStepStore()
const { stepCurrent, stepNext, stepPrevious } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction } = stepStore

const checkValid = () => {
  if (!inputValid.value) {
    setBlankSubmitErrorAction('Please fill out the form')
  } else if (inputValid.value) {
    setBlankSubmitErrorAction('')
    forwardStepAction()
  }
}

const test = () => {
  forwardStepAction();
  console.log("in Test", "current", stepCurrent.value, "next", stepNext.value, "previous", stepPrevious.value )
}
</script>
<template>
  <div class="flex" v-show="stepStore.stepCurrent !== '/final-report-step'">
    <router-link :to="stepPrevious">
      <form-button label="Back" @click="backStepAction()" class="btn-back" v-show="stepCurrent !== '/' || '/company-name-step'" />
    </router-link>
    <router-link :to="stepNext">
      <form-button
        :label="stepStore.stepCurrent === '/' ? 'Let\'s Go!' : 'Next'"
        @click="forwardStepAction()"
        class="btn-next text-center"
        type="submit"
      />
    </router-link>
   
      <!-- <form-button
        label="Next"
        @click="test"
        class="btn-next text-center"
        type="submit"
      /> -->

  </div>
</template>
