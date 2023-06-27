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
    <div class="m-2 md:mt-4">
      <img src="../../images/cloudspot-logo.svg" />
    </div>
    <div
      class="grid grid-flow-col gap-2 basis-1/3 w-2/3 lag:w-1/2 border border-grey-200 rounded-xl items-center justify-stretch"
      v-if="stepCurrent !== '/'"
    >
      <div
        :class="
          stepCurrent === step.current
            ? 'p-2 flex justify-center items-center border-l border-grey-200 h-12 md:h-16 w-full'
            : 'flex justify-center items-center border-l border-grey-200 h-12 md:h-16'
        "
        v-for="step in steps"
        v-show="step.icon !== 'none'"
      >
        <router-link :to="step.current" class="w-full">
          <div class="flex flex-row w-full justify-center items-center">
            <div :class="stepCurrent === step.current ? 'w-10 h-10 bg-aqua-100 flex justify-center items-center rounded-full' : ''">
              <img :src="step.icon" class="w-6 h-6" />
            </div>
            <div v-if="stepCurrent === step.current" class="pl-3 hidden sm:block">
              <p class="text-caption-2">{{ step.number }}</p>
              <p class="text-caption-bold">{{ step.name }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
