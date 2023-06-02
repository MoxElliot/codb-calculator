<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import { ref } from 'vue'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const { setblankSubmitErrorAction } = reportStore
const stepStore = useStepStore()
const { stepCurrent, stepNum } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction } = stepStore

let toggleSubmit = ref(true)

const checkValid = () => {
  if (!inputValid.value) {
    toggleSubmit.value = false
    setblankSubmitErrorAction('Please fill out the form')
  } else if (inputValid.value) {
    toggleSubmit.value = true
    setblankSubmitErrorAction('')
    forwardStepAction()
  }
}
</script>
<template>
  <div class="flex" v-show="stepNum !== 7">
    <router-link :to="stepCurrent">
      <form-button label="Back" @click="backStepAction()" class="btn-back" v-show="stepNum > 1" />
    </router-link>
    <router-link :to="stepCurrent">
      <form-button
        :label="stepNum === 0 ? 'Let\'s Go!' : 'Next'"
        @click="checkValid"
        class="btn-next text-center"
        type="submit"
      />
    </router-link>
  </div>
</template>
