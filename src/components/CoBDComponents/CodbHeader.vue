<script setup lang="ts">
import steps from '../../assets/stepsObject'
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import FormButton from '../FormComponents/FormButton.vue'
import CloudspotLogo from '../IconComponents/CloudspotLogo.vue'

const stepStore = useStepStore()
const { stepCurrent } = storeToRefs(stepStore)

defineProps({
  isActive: {
    type: Boolean
  }
})

// let currentIcon = '' as any

// const changeIcon = (icon: any) => {
//   currentIcon = icon
// }

//this is the active/complete color for the icons: #7CC1B5
// v-if on line 27ish gives an error 'Property 'step' does not exist on type'
</script>

<template>
  <div class="flex basis-full flex-col items-center">
    <cloudspot-logo class="m-2 md:mt-4" />
    <div
      class="lag:w-1/2 grid w-2/3 basis-1/3 grid-flow-col items-center justify-stretch gap-2 rounded-xl border border-grey-200"
      v-if="stepCurrent !== '/'"
    >
      <div
        :class="
          stepCurrent === step.current
            ? 'flex h-10 w-full items-center justify-center border-l border-grey-200 p-2 md:h-16'
            : 'flex h-10 items-center justify-center border-l border-grey-200 md:h-16'
        "
        v-for="step in steps"
        v-show="step.icon !== ''"
      >
        <router-link :to="step.current" class="w-full">
          <div class="flex w-full flex-row items-center justify-center">
            <form-button
              :class="
                stepCurrent === step.current
                  ? 'flex h-9 w-9 items-center justify-center rounded-full bg-aqua-100 md:h-10 md:w-10'
                  : ''
              "
              :btn-image="step.icon"
              :isActive="stepCurrent === step.current ? true : false"
            >
            </form-button>

            <div v-if="stepCurrent === step.current" class="hidden pl-3 sm:block">
              <p class="text-caption-2">{{ step.number }}</p>
              <p class="text-caption-bold">{{ step.name }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
