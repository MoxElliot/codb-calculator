<script setup lang="ts">
import steps from '../../assets/stepsArray'
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'

const stepStore = useStepStore()
const { stepName } = storeToRefs(stepStore)
</script>

<template>
  <div class="flex flex-col items-center">
    <h2>Cost of Doing Business Calculator</h2>
    <!-- <div v-for="step in steps" :key="step.id">
      <router-link class="border border-black m-1" :to="step.path">
        {{ step.name }} 
      </router-link>
    </div> -->
    <p>{{ stepName }} - {{ stepStore.stepProgressPercent }}%</p>
  </div>
</template>
