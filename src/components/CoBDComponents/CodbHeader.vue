<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'
import startHereIcon from '../../images/start-here-step-icon-inactive.png'
import fixedCostIcon from '../../images/fixed-cost-step-icon-inactive.png'
import variableCostIcon from '../../images/variable-cost-step-icon-inactive.png'
import bookingIncomeIcon from '../../images/booking-income-step-icon-inactive.png'
import ownersDrawIcon from '../../images/owners-draw-step-icon-inactive.png'
import finalReportIcon from '../../images/final-report-step-icon-inactive.png'
import steps from '../../assets/stepsArray'

const stepStore = useStepStore()
const { stepName } = storeToRefs(stepStore)

const stepIconObj: { src: string }[] = [
  {
    src: startHereIcon
  },
  {
    src: fixedCostIcon
  },
  {
    src: variableCostIcon
  },
  {
    src: bookingIncomeIcon
  },
  {
    src: ownersDrawIcon
  },
  {
    src: finalReportIcon
  }
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
        v-for="step in steps"
        v-show="step.icon !== 'none'"
        :key="step.id"
      >
        <router-link :to="step.path">
          <img :src="step.icon" class="w-6 h-6" />
        </router-link>
      </div>
    </div>
  </div>
</template>
