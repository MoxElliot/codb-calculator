<script setup lang="ts">
import { useVariableCostStore } from '@/stores/variableCostStore'
import { storeToRefs } from 'pinia'

defineProps(['variableCost'])

const { variableCosts } = storeToRefs(useVariableCostStore())
</script>

<template>
  <div
    class="variable-cost-table border border-black"
    v-for="variableCost in variableCosts"
    :key="variableCost.id"
  >
    <div class="variable-cost-row flex flex-row">
      <p class="flex-1">{{ variableCost.name }}</p>
      <p class="flex-1">{{ variableCost.category }}</p>
      <p class="flex-1">$ {{ variableCost.amount }}</p>
    </div>
  </div>
</template>

<style scoped></style>
