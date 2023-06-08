<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import steps from '../../assets/stepsObject'
// import router from '../../router/index'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const reportStore = useReportStore()
const { inputValid } = storeToRefs(reportStore)
const { setBlankSubmitErrorAction } = reportStore
const stepStore = useStepStore()
const { stepCurrent, stepNext, stepPrevious } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction } = stepStore

const route = useRoute();
const router = useRouter();


// let current = router.currentRoute.value.path
// let next = ref(router.currentRoute.value.meta.next)
// let previous = ref(router.currentRoute.value.meta.previous)

const checkValid = () => {
  // console.log('in check valid', inputValid.value)
  // if (!inputValid.value) {
  //   setBlankSubmitErrorAction('Please fill out the form')
  // } else if (inputValid.value) {
  //   setBlankSubmitErrorAction('')
  // }

  console.log('in check valid stepNext, stepPrevious', stepNext.value, stepPrevious.value)
  // console.log("useRouter", router.currentRoute.value['name'])
  console.log('in check valid current', router.currentRoute.value.path)
  // console.log("steps", steps[route.name].next)

  // console.log("useRouter", router.options.routes[0].children)
  //router.currentRoute.value.meta.previous
  //router.currentRoute.value.meta.next
  console.log(' in check valid next', router.currentRoute.value.meta.next)
  console.log(' in check valid previous', router.currentRoute.value.meta.previous)
}

const backStepFunction = () => {
  const backStep = router.currentRoute.value.meta.previous
  router.push(backStep)
}

const nextStepFunction = () => {
  const nextStep = router.currentRoute.value.meta.next
  if (!inputValid.value) {
    setBlankSubmitErrorAction('Please fill out the form')
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
      <!-- <router-link :to="router.currentRoute.value.meta.previous"> -->
        <form-button
          label="Back"
          @click="backStepFunction()"
          class="btn-back"
          v-show="stepCurrent !== '/' || '/company-name-step'"
        />
      <!-- </router-link> -->
      <!-- <router-link :to="router.currentRoute.value.meta.next" disabled=true> -->
        <form-button
          :label="stepCurrent === '/' ? 'Let\'s Go!' : 'Next'"
          @click="nextStepFunction()"
          class="btn-next mb-20 sm:mb-0 bg-nextButtonArrow bg-no-repeat bg-buttonArrow bg-15%"
          type="submit"
        />
      <!-- </router-link> -->
    </div>
  </div>
  <!-- <div  class="flex h-full justify-center items-end sm:items-center" v-for="step in steps" v-show="step.current === stepCurrent">
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
        @click="checkValid()"
        class="btn-next mb-20 sm:mb-0 bg-nextButtonArrow bg-no-repeat bg-buttonArrow bg-15%" 
        
      />
    </router-link>
  </div> -->
</template>
