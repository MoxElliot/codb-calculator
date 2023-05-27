<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import icon from '../../images/fixed-cost-step-icon-inactive.png'

const stepStore = useStepStore()
const { stepName } = storeToRefs(stepStore)

const stepIconObj: { src: string }[] = [
  {
    src: icon
  },
  {
    src: icon
  },
  {
    src: icon
  },
  {
    src: icon
  },
  {
    src: icon
  },
  {
    src: icon
  },
]
</script>

<template>
  <div class="flex flex-col basis-full items-center">
    <div class="mt-8 mb-10">
      <img src="../../images/cloudspot-logo.png" />
    </div>
    <div
      class="grid grid-flow-col gap-2 basis-1/4 w-1/2 border border-grey-200 rounded-xl items-center justify-stretch"
      v-show="stepName !== 'Home'"
    >
      <div
        class="flex justify-center items-center h-4/6 border-r border-grey-200"
        v-for="icon in stepIconObj"
      >
        <img :src="icon.src" class="w-6 h-6" />
        <!-- <p class=" border border-black">{{ stepName }}</p> -->
      </div>
      <!-- <div class="h-5/6 bg-red-100">
        <p>{{ stepName }}</p>
      </div>
      <div class="h-5/6 bg-red-100">
        <p>{{ stepName }}</p>
      </div>
      <div class="h-5/6 bg-red-100">
        <p>{{ stepName }}</p>
      </div>
      <div class="h-5/6 bg-red-100">
        <p>{{ stepName }}</p>
      </div>
      <div class="h-5/6 bg-red-100">
        <p>{{ stepName }}</p>
      </div> -->
      <!-- <div class="w-0.5 h-5/6"></div> -->
    </div>
  </div>
</template>
