<script setup lang="ts">
import steps from '../../assets/stepsArray'
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'

const stepStore = useStepStore()
const { stepName } = storeToRefs(stepStore)

</script>

<template>
  <h2>Cost of Doing Business Calculator</h2>
  <div class="flex">
    <div v-for="step in steps" :key="step.id">
      <router-link class="border border-black m-1" :to="step.path">
        {{ step.name }} 
      </router-link>
    </div>
    <!-- {{ stepName }} - {{ stepStore.stepProgressPercent }} -->
  </div>
</template>
