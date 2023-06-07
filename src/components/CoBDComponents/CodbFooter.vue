<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import { onMounted, onUpdated } from 'vue'
import steps from '../../assets/stepsArray'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction } = reportStore
const stepStore = useStepStore()
const { stepCurrent, stepNext, stepPrevious, nextButtonLabel } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction, setNextButtonLabel } = stepStore

const checkValid = () => {
  if (!inputValid.value) {
    setBlankSubmitErrorAction('Please fill out the form')
  } else if (inputValid.value) {
    setBlankSubmitErrorAction('')
    forwardStepAction()
  }
}
let here =  window.location.pathname
onUpdated(() => {
  // console.log(
  //   'UPDATED in CodbFooter steps',
  //   'current',
  //   stepCurrent.value,
  //   'next',
  //   stepNext.value,
  //   'previous',
  //   stepPrevious.value
  // )
  // updateStepAction
   here =  window.location.pathname
})
onMounted(() => {
  // console.log(
  //   'MOUNTED in CodbFooter steps',
  //   'current',
  //   stepCurrent.value,
  //   'next',
  //   stepNext.value,
  //   'previous',
  //   stepPrevious.value
  // )
  // updateStepAction
   here =  window.location.pathname
})

</script>
<template>
  <!-- <div class="flex h-full justify-center items-end sm:items-center" v-show="stepCurrent !== '/final-report-step'">
    <div>
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
        class="btn-next mb-20 sm:mb-0 bg-nextButtonArrow bg-no-repeat bg-buttonArrow bg-15%" 
        type="submit"
      />
    </router-link>
  </div> -->
  <div  class="flex h-full justify-center items-end sm:items-center" v-for="step in steps" v-show="step.current === stepCurrent">
    <router-link :to="step.previous">
      <form-button
        label="Back"
        @click="backStepAction()"
        class="btn-back"
      />
    </router-link>
    <router-link :to="step.next">
      <form-button
        label="Next"
        @click="backStepAction()"
        class="btn-next"
        
      />
    </router-link>
  </div>
</template>
