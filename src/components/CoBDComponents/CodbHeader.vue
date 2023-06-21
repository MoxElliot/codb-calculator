<script setup lang="ts">
import steps from '../../assets/stepsObject'
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'

const stepStore = useStepStore()
const { stepCurrent } = storeToRefs(stepStore)


//this is the active/complete color for the icons: #7CC1B5
// v-if on line 27ish gives an error 'Property 'step' does not exist on type'

</script>

<template>
  <div class="flex flex-col basis-full items-center">
    <div class="my-2 md:mt-4">
      <img src="../../images/cloudspot-logo.svg" />
    </div>
    <div
      class="grid grid-flow-col gap-2 basis-1/3 w-1/2 border border-grey-200 rounded-xl items-center justify-stretch"
      v-if="stepCurrent !== '/'"
    >
      <div
        class="flex justify-center items-center border-r border-grey-200 h-2/3"
        v-for="step in steps"
        v-show="step.icon !== 'none'"  
      > 
        <router-link :to="step.current">
          <img :src="step.icon" class="w-6 h-6" />
        </router-link>
      </div>
    </div>
  </div>
</template>
