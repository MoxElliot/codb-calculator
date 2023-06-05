<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction } = reportStore
const stepStore = useStepStore()
const { stepCurrent, stepNum } = storeToRefs(stepStore)
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
  <div class="flex h-full justify-center sm:items-center items-end " v-show="stepNum !== 7">
    <router-link :to="stepCurrent">
      <form-button label="Back" @click="backStepAction()" class="btn-back" v-show="stepNum > 1" />
    </router-link>
    <router-link :to="stepCurrent">
      <form-button
        :label="stepNum === 0 ? 'Let\'s Go!' : 'Next'"
        @click="checkValid"
        class="btn-next mb-20 sm:mb-0"
        type="submit"
      />
    </router-link>
  </div>
</template>
