<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction } = reportStore
const stepStore = useStepStore()
const { stepCurrent } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction } = stepStore

const checkValid = () => {
  if (!inputValid.value) {
    setBlankSubmitErrorAction('Please fill out the form')
  } else if (inputValid.value) {
    setBlankSubmitErrorAction('')
    forwardStepAction()
  }
}
</script>
<template>
  <div class="flex" v-show="stepCurrent !== '/final-report-step'">
    <router-link :to="stepCurrent">
      <form-button label="Back" @click="backStepAction()" class="btn-back" v-show="stepCurrent !== '/' || '/company-name-step'" />
    </router-link>
    <router-link :to="stepCurrent">
      <form-button
        :label="stepCurrent === '/' ? 'Let\'s Go!' : 'Next'"
        @click="checkValid"
        class="btn-next text-center"
        type="submit"
      />
    </router-link>
  </div>
</template>
