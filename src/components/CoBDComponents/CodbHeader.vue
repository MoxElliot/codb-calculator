<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import steps from '../../assets/stepsArray'

const stepStore = useStepStore()
// const { stepName } = storeToRefs(stepStore)
const { stepCurrent } = storeToRefs(stepStore)
</script>

<template>
  <div class="flex flex-col basis-full items-center h-1/2">
    <div class="mt-8 mb-10">
      <img src="../../images/cloudspot-logo.png" />
    </div>
    <div
      class="grid grid-flow-col gap-2 basis-1/4 w-1/2 border border-grey-200 rounded-xl items-center justify-stretch"
      v-show="stepCurrent !== 'Home'"
    >
      <div
        class="flex justify-center items-center h-4/6 border-r border-grey-200"
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
