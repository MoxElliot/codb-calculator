<script setup lang="ts">
import { onMounted } from 'vue';
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia';


const stepStore = useStepStore()
const { stepCurrent, stepNext, stepPrevious, nextButtonLabel } = storeToRefs(stepStore)
const { backStepAction, forwardStepAction, setNextButtonLabel} = stepStore


onMounted(() => {
  setNextButtonLabel
})
</script>

<template >
  <div class="flex flex-row justify-center basis-full">
    <div class="flex flex-col items-center justify-around basis-2/4">
      <div class="">
        <p class="font-serif text-grey-300 text-heading2 ">Hey there!</p>
      </div>
      <div class="">
        <p class="font-sans text-grey-300 text-body2 text-center">
          Welcome to the Cost of Doing Business (CoDB) tool. With this spreadsheet, you'll be able
          to easily calculate how much it costs for you to run your business!
        </p>
      </div>
      <div class="info-blue py-6 px-16 self-stretch">
        
          <p>This is a self-guided excercise, so don't feel rushed!</p>
          <p>Usint the NEXT STEP button, navigate through each section until the end!</p>
        
      </div>
    </div>
  </div>
</template>
