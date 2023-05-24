<script setup lang="ts">
import { useStepStore } from '../../stores/stepStore'
import { storeToRefs } from 'pinia'

const stepStore = useStepStore()
const { stepName } = storeToRefs(stepStore)
</script>

<template>
  <div class="flex flex-col items-center">
    <h2>Cost of Doing Business Calculator</h2>
    <p>{{ stepName }}</p>
  </div>
</template>
